import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { ListsService } from './lists.service';
import { List } from './interfaces/list.interface';
import { CreateListDto, CreateListItemDto } from './dto/create-list.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ListItem } from './interfaces/listItem.interface';

@Controller('lists')
export class ListsController {
  constructor(
    @InjectModel('List') private readonly listModel: Model<List>,
    private readonly listsService: ListsService,
  ) {}

  @Get('/allLists')
  async getAllLists(@Req() req): Promise<List[]> {
    const userId = req.user;
    const organizationId = req.organizationId;
    return await this.listsService.findAll(userId, organizationId);
  }

  @Get('/latest')
  async findLatest(@Req() req): Promise<List> {
    const userId = req.user;
    const organizationId = req.organizationId || '';
    return await this.listsService.findLatest(userId, organizationId);
  }

  @Get('/listItems')
  async getAllListItems(): Promise<ListItem[]> {
    return await this.listsService.findAllListItems();
  }

  @Get('/statistics')
  async getStatistics(): Promise<any> {
    return await this.listsService.getStatistics();
  }

  // new statistics implementation
  // @Post('/statistics')
  // async getStatistics(@Body() filters: any): Promise<any> {
  //   const { startDate, endDate, productCategories } = filters;
  //   return await this.listsService.getStatistics(startDate, endDate, productCategories);
  // }
  

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<List> {
    const cleanedId = id.replace('list:', '');
    return this.listsService.findOneById(cleanedId);
  }

  @Delete(':listId')
  async deleteList(
    @Param('listId') listId: string,
  ): Promise<{ message: string }> {
    await this.listsService.deleteListById(listId);
    return { message: 'List deleted successfully' };
  }

  @Put(':id/finishShopping')
  async finishShopping(
    @Param('id') listId: string,
    @Body('status') status: boolean,
    @Body('totalPrice') totalPrice: string,
  ): Promise<List> {
    return await this.listsService.finishShopping(
      listId,
      status,
      parseFloat(totalPrice),
    );
  }

  @Post('/listItems/byIds')
  async getListItemsByIds(@Body('itemIds') ids: string[]): Promise<any[]> {
    if (!ids) {
      throw new BadRequestException('No ids provided');
    }
    const objectIdArray = ids.map((id) =>
      Types.ObjectId.createFromHexString(id),
    );
    return await this.listsService.findListItemsByIds(objectIdArray);
  }
  @Post('/new')
  async create(
    @Body() createListDto: CreateListDto,
    @Req() req,
  ): Promise<List> {
    createListDto.name = this.listsService.generateRandomName();
    const userId = req.user;
    const organizationId = req.organizationId;
    return this.listsService.create(createListDto, userId, organizationId);
  }

  @Post(':listId/addProduct')
  async addProductToList(
    @Param('listId') listId: string,
    @Body() createListItemDto: CreateListItemDto,
  ): Promise<List> {
    return await this.listsService.addProductToList(listId, createListItemDto);
  }

  @Put(':listId/products/:listItemId')
  async updateProductStatusInList(
    @Param('listId') listId: string,
    @Param('listItemId') listItemId: string,
    @Body('status') status: 'pending' | 'retrieved',
  ): Promise<List> {
    return await this.listsService.updateProductStatusInList(
      listId,
      Types.ObjectId.createFromHexString(listItemId),
      status,
    );
  }

  @Delete(':listId/products/:productId')
  async deleteListItem(
    @Param('listId') listId: string,
    @Param('productId') productId: string,
  ): Promise<List> {
    return await this.listsService.deleteListItem(
      listId,
      Types.ObjectId.createFromHexString(productId),
    );
  }

  @Patch(':listId/products/:listItemId/edit')
  async editListItem(
    @Param('listId') listId: string,
    @Param('listItemId') listItemId: string,
    @Body() updateData: Partial<ListItem>,
  ): Promise<ListItem> {
    return await this.listsService.editListItem(
      Types.ObjectId.createFromHexString(listItemId),
      updateData,
    );
  }
}
