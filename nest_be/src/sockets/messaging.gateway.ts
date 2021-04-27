import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from 'src/chat/chat.service';

@WebSocketGateway()
export class MessagingGateway {
  constructor(private readonly chatService: ChatService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('join_room')
  joinRoom(@MessageBody() data: any) {
    Logger.log(`Joining room ${data.roomId}`);
    this.server.socketsJoin(data.roomId);
    this.server.to(data.roomId).emit('joined_room', {
      message: `New member joined room ${data.roomId}`,
    });
    this.chatService.test();
  }

  @SubscribeMessage('send_message')
  sendMessage(@MessageBody() data: any) {
    this.server.to(data.roomId).emit('sent_message', data);
    this.chatService.createMessage({
      content: data.data,
      sender: data.sender,
      receiver: data.receiver,
    });
  }
}
