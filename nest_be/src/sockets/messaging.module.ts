import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from 'src/chat/chat.module';
import { Chat, ChatSchema, Message, MessageSchema } from 'src/chat/chat.schema';
import { ChatService } from 'src/chat/chat.service';
import { MessagingGateway } from './messaging.gateway';

@Module({
  imports: [
    ChatModule,
    MongooseModule.forFeature([
      { name: Chat.name, schema: ChatSchema },
      { name: Message.name, schema: MessageSchema },
    ]),
  ],
  providers: [MessagingGateway, ChatService],
})
export class MessagingModule {}
