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
    console.log(`session Token: ${sessionToken}`);
    console.log(`sessionId: ${sessionId}`);
    console.log(`organizationId ${organizationId}`);
    console.log(`req.cookies['__session']: ${req.cookies['__session']}`);
    console.log(`req.headers['authorization']: ${req.headers['authorization']}`);

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
      console.log(`req: ${req}`);
      console.log(`session:${session}`)
  
      next();
    } catch (error) {
      console.error('AuthenticationMiddleware error:', error);
      throw new UnauthorizedException('Authentication failed');
    }
  }
}
