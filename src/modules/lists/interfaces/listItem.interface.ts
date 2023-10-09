import { Document, Types } from 'mongoose';

// listItem.interface.ts
export interface ListItem extends Document {
    productId: Types.ObjectId;
    amountOfUnits: number;
    description?: string;
    assignee?: string;
    status: 'pending' | 'retrieved';
}
