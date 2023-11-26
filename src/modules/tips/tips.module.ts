import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TipsController } from './tips.controller';
import { TipSchema } from './schemas/tip.schema';
import { ChatGPTModule } from '../chatgpt/chatgpt.module';
import { TipsService } from './tips.service';

@Module({
  imports: [
    ChatGPTModule,
    MongooseModule.forFeature([{ name: 'Tip', schema: TipSchema }])
  ],
  controllers: [TipsController],
  providers: [TipsService],
})
export class TipsModule {}
