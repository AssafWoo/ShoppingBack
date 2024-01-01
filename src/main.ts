

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsConfig } from './config/cors.config';
import * as mongoose from 'mongoose';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.enableCors(corsConfig);
  mongoose.set('debug', true);
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
  });
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(PORT);
}
bootstrap();