import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MainDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  avatar: string;
}

export const MainSchema = SchemaFactory.createForClass(User);
