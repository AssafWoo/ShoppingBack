import { ConfigModule, ConfigService } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsModule } from './modules/lists/lists.module';
import { ProductModule } from './modules/products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingListGateway } from './shopping-list/shopping-list.gateway';
import { UsersModule } from './modules/users/users.module';
import { ClerkProvider } from './common/providers/clerk-setup.provider';
import { AuthenticationMiddleware } from './common/middlewares/authentication.middleware';
import { TipsModule } from './modules/tips/tips.module';
import { ChatGPTModule } from './modules/chatgpt/chatgpt.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    ListsModule,
    ProductModule,
    UsersModule,
    TipsModule, // Add the TipsModule here
    ChatGPTModule, // Add the ChatGPTModule here if it's not already imported within TipsModule


  ],
  controllers: [AppController],
  providers: [AppService, ShoppingListGateway, ClerkProvider],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      // Exclude paths for authentication like login or register if you have any.
      // .exclude(
      //   { path: 'auth/login', method: RequestMethod.POST },
      //   { path: 'auth/register', method: RequestMethod.POST }
      // )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}


