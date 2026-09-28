import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

import { AccessTokenPayload } from '../types/access-token-payload';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request =
      context.switchToHttp().getRequest<Request>();

    const authorization =
      request.headers.authorization;

    if (!authorization) {
      throw new UnauthorizedException(
        'Authorization header is required.',
      );
    }

    const [scheme, token] =
      authorization.split(' ');

    if (
      scheme !== 'Bearer' ||
      !token
    ) {
      throw new UnauthorizedException(
        'Use Bearer authentication.',
      );
    }

    try {
      const payload =
        await this.jwtService.verifyAsync<AccessTokenPayload>(
          token,
          {
            secret:
              process.env.JWT_ACCESS_SECRET ||
              'development-access-secret',
          },
        );

      if (payload.type !== 'access') {
        throw new UnauthorizedException(
          'Invalid access token.',
        );
      }

      request.user = payload;

      return true;
    } catch (error) {
      if (
        error instanceof UnauthorizedException
      ) {
        throw error;
      }

      throw new UnauthorizedException(
        'Invalid or expired access token.',
      );
    }
  }
}