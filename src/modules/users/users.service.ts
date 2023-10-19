import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async findOne(email: string): Promise<User | undefined> {
        return this.userModel.findOne({ email });
    }
    async create(user: Partial<User>): Promise<User> {
        user.password = await bcrypt.hash(user.password, 10);
        const newUser = new this.userModel(user);
        try {
            const savedUser = await newUser.save();
            return savedUser as User;
        } catch (error) {
            if (error.code === 11000) { 
                throw new ConflictException('Username or email already exists');
            } else {
                throw new InternalServerErrorException('An error occurred while registering the user.');
            }
        }
    }
}
