import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { CreateChatDto, CreateMessageDto, UpdateChatDto } from '../utils/dtos';
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

  async findAll(): Promise<Chat[]> {
    return this.chatModel.find().exec();
  }

  async findOne(id: number): Promise<Chat> {
    return this.chatModel.findOne((chat: Chat) => chat.id === id);
  }

  async updateMessageIds(
    id: number,
    updateChatDto: UpdateChatDto,
  ): Promise<string | undefined> {
    return this.chatModel
      .updateOne(
        { _id: id },
        { $push: { messageIds: { $each: updateChatDto.messageIds! } } },
      )
      .getUpdate()._id;
  }

  async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = new this.messageModel(createMessageDto);
    return createdMessage.save();
  }

  async removeOne(id: number): Promise<any> {
    return this.chatModel.deleteOne({ _id: id });
  }

  async test(): Promise<string> {
    Logger.log('test service + socket');
    return 'HELLO BRO';
  }
}
