import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Clerk, sessions } from '@clerk/clerk-sdk-node';
import { CLERK_SECRET_KEY } from 'src/config/env.config';
@Injectable()
export class ClerkGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const sessionId = request.query['_clerk_session_id'];
    const clientToken = request.cookies['__session'];

    if (!sessionId || !clientToken) {
      console.log('Session ID or client token not found');
      return false;
    }

    const clerk = Clerk({ secretKey: process.env.CLERK_SECRET_KEY });
    
    try {
      const clientSession = await clerk.sessions.verifySession(
        sessionId,
        clientToken,
      );
      console.log('Client session verified', clientSession);
      return true;
    } catch (error) {
      console.error('Error verifying session with Clerk:', error);
      return false;
    }
  }
}
