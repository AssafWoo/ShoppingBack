import { Document } from 'mongoose';

export interface User extends Document {
    username: string;
    email: string;
    roles?: string[];
    clerkId?: string;
    clerkOrganizationId?: string;
  }
  