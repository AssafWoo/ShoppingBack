// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'YOUR_SECRET',  // This should ideally be in .env or config
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}



// [FRONTEND]
//    |
//    |----- Register: POST /auth/register -------> [auth.controller.ts]
//    |                                                    |
//    |                                                    V
//    |                                           [auth.service.ts]
//    |                                                    |
//    |               Validates data & saves to --> [user.schema.ts (DB)]
//    |
//    |
//    |----- Login: POST /auth/login -------------> [auth.controller.ts]
//    |                                                    |
//    |                                                    V
//    |                                           [auth.service.ts]
//    |                                                    |
//    |               Verifies with --------------> [user.schema.ts (DB)]
//    |                                                    |
//    |                                                    V
//    |                                        Generates JWT Token
//    |
//    |
//    |----- Access Protected Route with JWT token in header -------->
//    |                                                     |
//    |                                                     V
//    |                                           [auth.guard.ts]
//    |                                                     |
//    |                                                     V
//    |                                        Verifies JWT using 
//    |                                             [jwt.strategy.ts]
//    |                                                     |
//    |                                                     V
//    |                                            Access granted to
//    |                                             desired route
//    |
//    |
//    |----- CRUD operations for user profile: /users/* ------------>
//    |                                                     |
//    |                                                     V
//    |                                           [users.controller.ts]
//    |                                                     |
//    |                                                     V
//    |                                             [users.service.ts]
//    |                                                     |
//    |                                                     V
//    |                                              [user.schema.ts (DB)]
