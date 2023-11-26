import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class ChatGPTService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async queryChatGPT(prompt: string): Promise<string> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
      return completion.choices[0].message.content;

    } catch (error) {
      console.error('Error querying OpenAI:', error);
      throw error;
    }
  }
}
