import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListItemSchema } from './schemas/listItem.schema';

// listItem.modules.ts
@Module({
    imports: [MongooseModule.forFeature([{ name: 'ListItem', schema: ListItemSchema }])],
    providers: [{
        provide: 'ListItemModel',
        useValue: ListItemSchema
    }],
    exports: ['ListItemModel']
})
export class ListItemModule {}
