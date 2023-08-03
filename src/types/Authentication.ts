export interface IAuthentication {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  userName: string;
  twoFactorEnabled: string;
  '.issued': string;
  '.expires': string;
}
