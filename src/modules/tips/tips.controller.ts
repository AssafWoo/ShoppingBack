import { Controller, Post, Body, Req } from '@nestjs/common';
import { TipsService } from './tips.service';
import { ChatGPTService } from '../chatgpt/chatgpt.service';
import { CreateTipDto } from './dto/create-tip.dto'; // Import the DTO

@Controller('tips')
export class TipsController {
  constructor(
    private readonly tipsService: TipsService,
    private readonly chatGPTService: ChatGPTService,
  ) {}

  @Post()
async createTip(@Body() createTipDto: CreateTipDto, @Req() req) {
  const userId = req.user;
  const organizationId = req.organizationId;

  // Check for a recent tip first
  const recentTip = await this.tipsService.findRecentTip(userId, organizationId);

  if (recentTip) {
    return recentTip; // Return the existing tip if found
  }

  const chatGPTResponse = await this.chatGPTService.queryChatGPT(createTipDto.prompt);
  const newTip = await this.tipsService.create({
    ...createTipDto,
    userId,
    organizationId,
    tip: chatGPTResponse,
  });
  return newTip;
}

}
