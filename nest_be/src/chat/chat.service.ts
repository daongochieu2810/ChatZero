import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChatDto, UpdateChatDto } from '../utils/dtos';
import { Chat, ChatDocument, Message, MessageDocument } from './chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name)
    private readonly chatModel: Model<ChatDocument>,
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>,
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

  updateMessageIds(id: number, updateChatDto: UpdateChatDto) {
    return this.chatModel.updateOne(
      { _id: id },
      { $push: { messageIds: { $each: updateChatDto.messageIds! } } },
    );
  }

  remove(id: number) {
    this.chatModel.remove({ _id: id });
  }
}
