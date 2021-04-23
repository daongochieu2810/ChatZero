import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MgSchema } from 'mongoose';
import { User } from '../users/user.schema';

export type ChatDocument = Chat & Document;
export type MessageDocument = Message & Document;

@Schema()
export class Chat extends Document {
  @Prop({ type: MgSchema.Types.ObjectId, ref: 'User' })
  person1: User;
  @Prop({ type: MgSchema.Types.ObjectId, ref: 'User' })
  person2: User;
  @Prop()
  createdAt: number;
  @Prop()
  messageIds: string[];
}

@Schema()
export class Message extends Document {
  context: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
export const MessageSchema = SchemaFactory.createForClass(Message);
