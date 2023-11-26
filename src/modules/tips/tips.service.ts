import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tip } from './schemas/tip.schema'; // Import the interface that corresponds to the schema
import { CreateTipDto } from './dto/create-tip.dto';

@Injectable()
export class TipsService {
  constructor(@InjectModel(Tip.name) private tipModel: Model<Tip>) {}

  async create(createTipDto: CreateTipDto): Promise<Tip> {
    const createdTip = new this.tipModel(createTipDto);
    return createdTip.save();
  }

  // In TipsService
  async findRecentTip(userId: string, organizationId: string): Promise<Tip | null> {
    const sevenDaysAgo = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);
    return await this.tipModel.findOne({
      $or: [{ userId: userId }, { organizationId: organizationId }],
      createdAt: { $gte: sevenDaysAgo },
    }).exec();
  }
  
}
