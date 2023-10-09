import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
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
  async getAllLists(): Promise<List[]> {
    return await this.listsService.findAll();
  }

  @Get('/latest')
  async findLatest(): Promise<List> {
    return await this.listsService.findLatest();
  }

  @Get('/listItems')
  async getAllListItems(): Promise<ListItem[]> {
    return await this.listsService.findAllListItems();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<List> {
    const cleanedId = id.replace('list:', '');
    return this.listsService.findOneById(cleanedId);
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

  @Post("/new")
  create(@Body() createListDto: CreateListDto): Promise<List> {
    createListDto.name = this.listsService.generateRandomName();
    return this.listsService.create(createListDto);
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
}
