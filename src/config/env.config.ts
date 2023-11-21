import { config } from 'dotenv';
config();

export const DATABASE_URL = process.env.DATABASE_URL;
export const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
