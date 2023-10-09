import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';
import { ListSchema } from './schemas/list.schemas';
import { ListItemModule } from './listItem.module';
import { ShoppingListGateway } from 'src/shopping-list/shopping-list.gateway';
import { ListItemSchema } from './schemas/listItem.schema';

// lists.module.ts
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'List', schema: ListSchema },
      { name: 'ListItem', schema: ListItemSchema },
    ]),
    ListItemModule,
  ],
  controllers: [ListsController],
  providers: [ListsService, ShoppingListGateway],
  exports: [ListsService], // Exporting ListsService
})
export class ListsModule {}
