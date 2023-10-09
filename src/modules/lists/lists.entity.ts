import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

// lists.entity.ts
@Schema()
export class List extends Document {
  @Prop()
  name: string;

  @Prop()
  numberOfItems: number;

  @Prop({ default: true })
  active: boolean;

  @Prop([Types.ObjectId])
  items: Types.ObjectId[];  // Array of product IDs

  @Prop({ default: Date.now })
  date: Date;

  @Prop({ default: 0 })
  finalPrice: number;
}

export const ListSchema = SchemaFactory.createForClass(List);
