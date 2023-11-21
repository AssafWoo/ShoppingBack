import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ default: [] })
  roles: string[];

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ unique: true, sparse: true }) 
  clerkId?: string;

  @Prop({ unique: true, sparse: true }) 
  clerkOrganizationId?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
