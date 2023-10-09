import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck(): string {
    return 'Shopping Backend Service is up!';
  }
}
