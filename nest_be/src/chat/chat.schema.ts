import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MgSchema } from 'mongoose';
import { User } from '../users/user.schema';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat extends Document {
  @Prop({ type: MgSchema.Types.ObjectId, ref: 'User' })
  person1: User;
  @Prop({ type: MgSchema.Types.ObjectId, ref: 'User' })
  person2: User;
  @Prop()
  createdAt: number;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
