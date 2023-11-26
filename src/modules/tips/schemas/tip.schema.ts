import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TipDocument = Tip & Document;
@Schema()
export class Tip {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  organizationId: string;

  @Prop({ required: true })
  tip: string;

  @Prop()
  tipField: string; // like 'diet tip', 'budget tip', etc.

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const TipSchema = SchemaFactory.createForClass(Tip);

