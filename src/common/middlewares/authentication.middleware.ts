import { sessions } from '@clerk/clerk-sdk-node';
import {
  Inject,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(
    @Inject('Clerk') private readonly clerk: any, // Assuming ClerkType is imported from Clerk SDK
  ) {}

  async use(req: any, res: any, next: () => void) {
    const sessionToken =
      req.cookies['__session'] || req.headers['authorization'];
    const sessionId = req.query['_clerk_session_id'];
    const organizationId = req.query['_clerk_organization_id'];

    if (!sessionToken) {
      throw new UnauthorizedException('No session token provided');
    }
    try {
      const session = await this.clerk.sessions.verifySession(
        sessionId,
        sessionToken,
      );
      req.session = session;
      req.user = session.userId;
      req.organizationId = organizationId;
      next();
    } catch (error) {
      console.error('AuthenticationMiddleware error:', error);
      throw new UnauthorizedException('Authentication failed');
    }
  }
}
