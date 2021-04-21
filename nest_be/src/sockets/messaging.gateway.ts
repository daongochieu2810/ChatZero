import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway()
export class MessagingGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('join_room')
  joinRoom(@MessageBody() data: any) {
    Logger.log(`Joining room ${data.roomId}`);
    this.server.socketsJoin(data.roomId);
    this.server
      .to(data.roomId)
      .emit('joined_room', { message: 'New member joined' });
  }

  @SubscribeMessage('send_message')
  sendMessage(@MessageBody() data: any) {
    this.server.to(data.roomId).emit('sent_message', data);
  }
}
