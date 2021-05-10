import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SocketAdapter } from './sockets/socket.adapter';

async function bootstrap() {
  const mainApp = await NestFactory.create(AppModule, { cors: true });
  const microServiceServer = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3002
      }
    }
  );
  const rabbitMQServer = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'main_queue',
        queueOptions: {
          durable: false
        },
      }
    }
  )

  mainApp.useWebSocketAdapter(new SocketAdapter(mainApp, true));
  await mainApp.listen(3001, () => console.log('Http server is listening at port 3001'));
  microServiceServer.listen(() => console.log('Microservice server is listening at port 3002'));
  rabbitMQServer.listen(() => console.log('RabbitMQ server is listening'))
}

bootstrap();
