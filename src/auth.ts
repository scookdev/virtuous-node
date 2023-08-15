import axios from 'axios';
import { IAuthentication } from './types/Authentication';

export class Auth {
  public async getToken(): Promise<string> {
    try {
      const { access_token } = await this._signIn();

      return access_token;
    } catch (error: any) {
      console.error(error);
      throw new Error(`Error making request to Virtuous: ${error.message}`);
    }
  }

  public async getOrganizations(): Promise<any> {
    const { data } = await axios.get(`${process.env.VIRTUOUS_API_BASE_URI}/api/Organization`, {
      headers: {
        Authorization: `Bearer ${await this.getToken()}`
      }
    });

    return data;
  }

  public async getPermissions(): Promise<any> {
    const { data } = await axios.get(`${process.env.VIRTUOUS_API_BASE_URI}/api/Permission`, {
      headers: {
        Authorization: `Bearer ${await this.getToken()}`
      }
    });

    return data;
  }

  private async _signIn(): Promise<IAuthentication> {
    const req = this._authRequest();
    const params = new URLSearchParams();
    Object.keys(req).map((k) => {
      params.append(k, req[k]);
    });

    const { data } = await axios.post(`${process.env.VIRTUOUS_API_BASE_URI}/token`, params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    return data;
  }

  private _authRequest = () => {
    return {
      grant_type: 'password',
      username: process.env.VIRTUOUS_API_USERNAME,
      password: process.env.VIRTUOUS_API_PASSWORD
    };
  };
}
