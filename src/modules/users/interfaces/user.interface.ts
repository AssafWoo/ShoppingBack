import { Document } from 'mongoose';

export interface User extends Document {
    username: string;
    firstName: string;
    lastName: string;
    profilePicture?: string;  // Made this optional
    isActive: boolean;
    password: string;
    email: string;
    role?: string;
    // Add any other fields as necessary
}
