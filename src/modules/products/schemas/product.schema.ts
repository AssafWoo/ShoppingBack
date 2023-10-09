import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
}
,
{collection: 'Products',timestamps: true} 
);
