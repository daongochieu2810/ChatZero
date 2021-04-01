import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChatDto, UpdateChatDto } from '../utils/dtos';
import { Chat, ChatDocument } from './chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocument>,
  ) {}

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    const createdChat = new this.chatModel(createChatDto);
    return createdChat.save();
  }

  findAll() {
    return this.chatModel.find().exec();
  }

  findOne(id: number) {
    return this.chatModel.findOne((chat: Chat) => chat.id === id);
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return this.chatModel.updateOne({ _id: id }, updateChatDto);
  }

  remove(id: number) {
    return this.chatModel.remove({ _id: id });
  }
}
