import { Document, Types } from 'mongoose';
import { ListItem } from './listItem.interface';

// interfaces/list.interface.ts

export interface List extends Document {
    name: string;
    items: (ListItem | Types.ObjectId)[]; 
    active: boolean;
    date?: Date;
    finalPrice?: number;
    userId: Types.ObjectId;
    organizationId: Types.ObjectId;
}
