// lists.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { List } from './interfaces/list.interface';
import { ListItem } from './interfaces/listItem.interface';
import { ShoppingListGateway } from 'src/shopping-list/shopping-list.gateway';
import { adjectives, nouns } from './listNames/words';
import { Product } from '../products/interface/product.interface';

@Injectable()
export class ListsService {
  constructor(
    @InjectModel('List') private readonly listModel: Model<List>,
    @InjectModel('ListItem') private readonly listItemModel: Model<ListItem>,
    private readonly listsGateway: ShoppingListGateway,
  ) {}

  generateRandomName(): string {
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
  }

  async create(createListDto: any): Promise<List> {
    const newList = new this.listModel(createListDto);
    const savedList = await newList.save();
    this.listsGateway.sendListUpdate('listCreated', savedList);
    return savedList;
  }

  async findAll(): Promise<List[]> {
    try {
      return await this.listModel.find().lean().exec();
    } catch (error) {
      console.error('Error fetching lists:', error);
      throw error;
    }
  }

  async findLatest(): Promise<List> {
    return this.listModel.findOne({ active: true }).sort('-createdAt').exec();
  }

  async findOneById(id: string): Promise<List> {
    return await this.listModel.findById(id).exec();
  }

  async findListItemsByIds(ids: Types.ObjectId[]): Promise<any[]> {
    try {
      return await this.listItemModel
        .aggregate([
          {
            $match: {
              _id: { $in: ids },
            },
          },
          {
            $lookup: {
              from: 'Products',
              localField: 'productId',
              foreignField: '_id',
              as: 'productDetails',
            },
          },
          {
            $unwind: '$productDetails',
          },
          {
            $project: {
              productId: 0,
            },
          },
        ])
        .exec();
    } catch (error) {
      console.error('Error fetching list items by ids:', error);
      throw error;
    }
  }

  async findAllListItems(): Promise<ListItem[]> {
    try {
      return await this.listItemModel.find().lean().exec();
    } catch (error) {
      console.error('Error fetching list items:', error);
      throw error;
    }
  }

  async createListItem(product: any): Promise<ListItem> {
    const newListItem = new this.listItemModel(product);
    return await newListItem.save();
  }

  async addProductToList(listId: string, product: any): Promise<List> {
    const listItemData = {
      productId: product.productId,
      amountOfUnits: product.amountOfUnits,
      assignee: product.assignee,
      description: product.description,
    };

    const listItem = await this.createListItem(listItemData);
    const list = await this.listModel.findById(listId);
    list.items.push(listItem._id);
    const savedList = await list.save();

    this.listsGateway.sendListUpdate('productAdded', {
      listId: listId,
      product: listItem,
    });

    return savedList;
  }
  
  async updateProductStatusInList(
    listId: string,
    listItemId: Types.ObjectId,
    status: 'pending' | 'retrieved',
  ): Promise<any> {
    // Fetch and validate the list
    const list = await this.listModel.findById(listId).populate('items');
    if (!list) {
      throw new NotFoundException('List not found');
    }

    // Fetch and validate the list item
    const listItem = list.items.find(
      (item: any) => item._id.toString() === listItemId.toString(),
    ) as ListItem;
    if (!listItem) {
      throw new NotFoundException('Product not found in list');
    }

    // Update the list item's status
    listItem.status = status;
    await this.listItemModel.updateOne(
      { _id: listItem._id },
      { status: status },
    );

    // Notify other clients using the gateway
    this.listsGateway.sendListUpdate('productStatusUpdated', {
      listId: listId,
      listItemId: listItemId,
      status: status,
    });

    // Fetch and return the updated item with its combined product details
    const updatedItem = await this.findListItemsByIds([listItemId]);
    if (updatedItem && updatedItem.length) {
      return updatedItem[0];
    } else {
      throw new NotFoundException('Updated item not found');
    }
  }

  async finishShopping(
    listId: string,
    status: boolean,
    totalPrice: number,
  ): Promise<List> {
    const list = await this.listModel.findById(listId);

    if (!list) {
      throw new NotFoundException('List not found');
    }

    // Update list status and total price
    list.active = status;
    list.finalPrice = totalPrice;

    const updatedList = await list.save();

    // Notify other clients using the gateway (if needed)
    this.listsGateway.sendListUpdate('shoppingFinished', {
      listId: listId,
      status: status,
      totalPrice: totalPrice,
    });

    return updatedList;
  }

  async deleteListItem(
    listId: string,
    productId: Types.ObjectId,
  ): Promise<List> {
    const list = await this.listModel.findById(listId);

    if (!list) {
      throw new NotFoundException('List not found');
    }

    const index = list.items.indexOf(productId);
    if (index !== -1) {
      list.items.splice(index, 1);
    } else {
      throw new NotFoundException('Product not found in list');
    }

    const updatedList = await list.save();
    this.listsGateway.sendListUpdate('productRemoved', {
      listId: listId,
      productId: productId,
    });
    return updatedList;
  }

  async deleteListById(listId: string): Promise<void> {
    const list = await this.listModel.findById(listId);
    if (!list) {
      throw new NotFoundException('List not found');
    }

    // Delete all list items associated with the list (optional based on your use-case)
    await this.listItemModel.deleteMany({ _id: { $in: list.items } });

    // Delete the list itself
    await this.listModel.findByIdAndDelete(listId);

    // Notify other clients using the gateway
    this.listsGateway.sendListUpdate('listDeleted', { listId: listId });
  }

  async getStatistics(): Promise<any> {
    const closedLists = await this.listModel
      .find({ active: false })
      .populate({
        path: 'items',
        populate: {
          path: 'productId',
          model: 'Product',
        },
      })
      .exec();

    const result = {
      categoryDistribution: {},
      assigneeDistribution: {},
      totalSpent: 0,
    };

    for (const list of closedLists) {
      this.computeTotalSpent(result, list);
      this.computeCategoryDistribution(result, list);
      this.computeAssigneeDistribution(result, list);
    }

    return result;
  }

  private computeTotalSpent(result: any, list: List) {
    result.totalSpent += list.finalPrice;
  }

  private computeCategoryDistribution(result: any, list: List) {
    for (const item of list.items) {
      if ('productId' in item) {
        const product = item.productId as unknown as Product;
        if (product.category) {
          result.categoryDistribution[product.category] =
            (result.categoryDistribution[product.category] || 0) + 1;
        }
      }
    }
  }

  private computeAssigneeDistribution(result: any, list: List) {
    for (const item of list.items) {
      if ('assignee' in item && item.assignee) {
        result.assigneeDistribution[item.assignee] =
          (result.assigneeDistribution[item.assignee] || 0) + 1;
      }
    }
  }

  async editListItem(
    listItemId: Types.ObjectId,
    updateData: Partial<ListItem>,
  ): Promise<ListItem> {
    await this.listItemModel.updateOne({ _id: listItemId }, updateData);
    const updatedListItem = await this.listItemModel.findById(listItemId);
    if (!updatedListItem) {
      throw new NotFoundException('List item not found');
    }
    this.listsGateway.sendListUpdate('productEdited', {
      product: updatedListItem,
    });
    return updatedListItem;
  }
}
