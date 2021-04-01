import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @Prop()
  name: string;
  @Prop()
  password: string;
  @Prop()
  avatar: string;
}

export class UserDto {
  readonly name: string;
  readonly avatar: string;
  readonly password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
