import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsModule } from './modules/lists/lists.module';
import { ProductModule } from './modules/products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingListGateway } from './shopping-list/shopping-list.gateway';


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
  ],
  controllers: [AppController],
  providers: [AppService, ShoppingListGateway],
})
export class AppModule {}