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

  @SubscribeMessage('messages')
  findMessage(@MessageBody() data: any): Observable<WsResponse<string>> {
    return from(['hello']).pipe(
      map((item) => ({ event: 'messages', data: item })),
    );
  }
}
