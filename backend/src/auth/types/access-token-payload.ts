export interface AccessTokenPayload {
  sub: string;
  email: string;
  businessId: string;
  type: 'access';
  iat?: number;
  exp?: number;
}