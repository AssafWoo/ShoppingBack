import { config } from 'dotenv';

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
config({ path: envFile });

export const DATABASE_URL = process.env.DATABASE_URL;
export const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
