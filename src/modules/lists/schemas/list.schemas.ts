import { Schema } from 'mongoose';
// schemas/list.schema.ts

export const ListSchema = new Schema({
    name: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'ListItem' }],
    active: { type: Boolean, default: true },
    date: { type: Date },
    finalPrice: { type: Number, default: 0 }
},
    {collection: 'Lists',timestamps: true} 
);