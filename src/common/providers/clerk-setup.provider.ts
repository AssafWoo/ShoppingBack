import { Clerk } from '@clerk/clerk-sdk-node';
import {CLERK_SECRET_KEY} from '../../config/env.config';

// clerk-setup.provider.ts
export const ClerkProvider = {
  provide: 'Clerk',
  useFactory: () => {
    if (!CLERK_SECRET_KEY) {
      throw new Error('Missing Clerk secret key');
    }
    return Clerk({ secretKey: CLERK_SECRET_KEY });
  },
};
