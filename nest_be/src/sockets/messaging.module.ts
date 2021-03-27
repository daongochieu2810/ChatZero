import { Module } from '@nestjs/common';
import { MessagingGateway } from './messaging.gateway';

@Module({
  providers: [MessagingGateway],
})
export class MessagingModule {}