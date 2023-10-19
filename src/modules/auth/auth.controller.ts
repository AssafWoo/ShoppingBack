import { UsersService } from './../users/users.service';
import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UsersService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        const user = await this.userService.create(createUserDto);
        return {
            message: 'User successfully registered',
            user: {
                username: user.username,
                email: user.email,
            }
        };
    }
}