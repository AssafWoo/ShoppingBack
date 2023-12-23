import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsConfig } from './config/cors.config';
import * as mongoose from 'mongoose';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as cookieParser from 'cookie-parser';
import { config } from 'dotenv';

async function bootstrap() {
  if (process.env.NODE_ENV === 'production') {
    config({ path: '.env.production' });
  } else {
    config({ path: '.env.development' });
  }

  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.enableCors(corsConfig);
  mongoose.set('debug', true);
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
  });
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(4000);
}
bootstrap();
