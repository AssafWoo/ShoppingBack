import { Schema, Types } from 'mongoose';

// listItem.schema.ts
export const ListItemSchema = new Schema({
    productId: { type: Types.ObjectId, ref: 'Product', required: true },
    amountOfUnits: { type: Number, required: true },
    description: { type: String },
    assignee: { type: String },
    status: { type: String, enum: ['pending', 'retrieved'], default: 'pending' }
}
,
    {collection: 'ListItems',timestamps: true} 
);

