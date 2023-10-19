// user.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  // Future fields for multiple users
  @Prop()
  roles: string[]; // e.g., ['admin', 'editor', 'viewer']
  username: any;
}

export const UserSchema = SchemaFactory.createForClass(User);
