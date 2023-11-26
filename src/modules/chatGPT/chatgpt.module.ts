import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ChatGPTService } from './chatgpt.service';

@Module({
  imports: [HttpModule],
  providers: [ChatGPTService],
  exports: [ChatGPTService] 
})
export class ChatGPTModule {}
