import { Session } from '@clerk/clerk-sdk-node';
import { UsersService } from 'src/modules/users/users.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/modules/users/user.entity';

// map-clerk-session.utils.ts
@Injectable()
export class SessionService {
  constructor(private readonly usersService: UsersService) {}

  async mapClerkSessionToUser(session: any): Promise<User> {
    const user = await this.usersService.findOrCreateByClerkSession(session);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
