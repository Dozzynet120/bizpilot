import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { createHash } from 'crypto';

import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const email = dto.email.trim().toLowerCase();

    const existingUser =
      await this.prisma.user.findUnique({
        where: { email },
      });

    if (existingUser) {
      throw new ConflictException(
        'An account with this email already exists.',
      );
    }

    const passwordHash = await bcrypt.hash(
      dto.password,
      12,
    );

    const result =
      await this.prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            email,
            passwordHash,
            firstName: dto.firstName.trim(),
            lastName: dto.lastName.trim(),
          },
        });

        const slug =
          await this.generateUniqueBusinessSlug(
            dto.businessName,
            tx,
          );

        const business =
          await tx.business.create({
            data: {
              name: dto.businessName.trim(),
              slug,
              email,
              status: 'ACTIVE',
            },
          });

        await tx.businessMember.create({
          data: {
            businessId: business.id,
            userId: user.id,
            role: 'OWNER',
          },
        });

        return {
          user,
          business,
        };
      });

    const tokens = await this.issueTokens(
      result.user.id,
      result.user.email,
      result.business.id,
    );

    return {
      message: 'Account created successfully.',
      user: this.sanitizeUser(result.user),
      business: result.business,
      ...tokens,
    };
  }

  async login(dto: LoginDto) {
    const email = dto.email.trim().toLowerCase();

    const user =
      await this.prisma.user.findUnique({
        where: { email },
        include: {
          memberships: {
            include: {
              business: true,
            },
          },
        },
      });

    if (!user) {
      throw new UnauthorizedException(
        'Invalid email or password.',
      );
    }

    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedException(
        'This account is not currently active.',
      );
    }

    const passwordMatches =
      await bcrypt.compare(
        dto.password,
        user.passwordHash,
      );

    if (!passwordMatches) {
      throw new UnauthorizedException(
        'Invalid email or password.',
      );
    }

    const primaryMembership =
      user.memberships[0];

    if (!primaryMembership) {
      throw new UnauthorizedException(
        'This account is not associated with a business.',
      );
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        lastLoginAt: new Date(),
      },
    });

    const tokens = await this.issueTokens(
      user.id,
      user.email,
      primaryMembership.businessId,
    );

    return {
      message: 'Login successful.',
      user: this.sanitizeUser(user),
      business: primaryMembership.business,
      ...tokens,
    };
  }

  async getMe(
    userId: string,
    businessId: string,
  ) {
    const user =
      await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          memberships: {
            where: {
              businessId,
            },
            include: {
              business: true,
            },
          },
        },
      });

    if (!user) {
      throw new UnauthorizedException(
        'Authenticated user no longer exists.',
      );
    }

    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedException(
        'This account is not currently active.',
      );
    }

    const membership =
      user.memberships[0];

    if (!membership) {
      throw new UnauthorizedException(
        'You do not have access to this business.',
      );
    }

    return {
      user: this.sanitizeUser(user),
      business: membership.business,
      membership: {
        id: membership.id,
        role: membership.role,
        businessId: membership.businessId,
      },
    };
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException(
        'Refresh token is required.',
      );
    }

    let payload: {
      sub: string;
      email: string;
      businessId: string;
      type: string;
    };

    try {
      payload =
        await this.jwtService.verifyAsync(
          refreshToken,
          {
            secret:
              process.env.JWT_REFRESH_SECRET ||
              'development-refresh-secret',
          },
        );
    } catch {
      throw new UnauthorizedException(
        'Invalid or expired refresh token.',
      );
    }

    if (payload.type !== 'refresh') {
      throw new UnauthorizedException(
        'Invalid refresh token.',
      );
    }

    const tokenHash =
      this.hashToken(refreshToken);

    const storedToken =
      await this.prisma.refreshToken.findUnique({
        where: {
          tokenHash,
        },
      });

    if (
      !storedToken ||
      storedToken.revokedAt
    ) {
      throw new UnauthorizedException(
        'Invalid refresh token.',
      );
    }

    if (
      storedToken.expiresAt < new Date()
    ) {
      throw new UnauthorizedException(
        'Refresh token has expired.',
      );
    }

    await this.prisma.refreshToken.update({
      where: {
        id: storedToken.id,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    return this.issueTokens(
      payload.sub,
      payload.email,
      payload.businessId,
    );
  }

  async logout(refreshToken: string) {
    if (!refreshToken) {
      return {
        message: 'Logged out successfully.',
      };
    }

    const tokenHash =
      this.hashToken(refreshToken);

    await this.prisma.refreshToken.updateMany({
      where: {
        tokenHash,
        revokedAt: null,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    return {
      message: 'Logged out successfully.',
    };
  }

  private async issueTokens(
    userId: string,
    email: string,
    businessId: string,
  ) {
    const accessToken =
      await this.jwtService.signAsync(
        {
          sub: userId,
          email,
          businessId,
          type: 'access',
        },
        {
          secret:
            process.env.JWT_ACCESS_SECRET ||
            'development-access-secret',
          expiresIn: '15m',
        },
      );

    const refreshToken =
      await this.jwtService.signAsync(
        {
          sub: userId,
          email,
          businessId,
          type: 'refresh',
        },
        {
          secret:
            process.env.JWT_REFRESH_SECRET ||
            'development-refresh-secret',
          expiresIn: '30d',
        },
      );

    const tokenHash =
      this.hashToken(refreshToken);

    await this.prisma.refreshToken.create({
      data: {
        userId,
        tokenHash,
        expiresAt: new Date(
          Date.now() +
            30 *
              24 *
              60 *
              60 *
              1000,
        ),
      },
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  private hashToken(token: string) {
    return createHash('sha256')
      .update(token)
      .digest('hex');
  }

  private sanitizeUser(user: any) {
    const {
      passwordHash,
      memberships,
      ...safeUser
    } = user;

    return safeUser;
  }

  private async generateUniqueBusinessSlug(
    businessName: string,
    tx: any,
  ) {
    const baseSlug =
      businessName
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') ||
      'business';

    let slug = baseSlug;
    let counter = 1;

    while (true) {
      const existing =
        await tx.business.findUnique({
          where: { slug },
        });

      if (!existing) {
        return slug;
      }

      slug = `${baseSlug}-${counter}`;
      counter++;
    }
  }
}