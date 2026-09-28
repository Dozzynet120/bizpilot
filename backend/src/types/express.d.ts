import { AccessTokenPayload } from '../auth/types/access-token-payload';

declare global {
  namespace Express {
    interface Request {
      user?: AccessTokenPayload;
    }
  }
}

export {};