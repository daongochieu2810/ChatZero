import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketAdapter } from './sockets/socket.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useWebSocketAdapter(new SocketAdapter(app, true));
  await app.listen(3001);
}
bootstrap();
