import { PartialType } from '@nestjs/mapped-types';
import { User } from 'src/users/user.schema';

export class CreateChatDto {
  person1: User;
  person2: User;
  createdAt: number;
}

export class UpdateChatDto extends PartialType(CreateChatDto) {}
