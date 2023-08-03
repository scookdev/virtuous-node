import { Auth } from './auth';
import axios from 'axios';

export class Entity {
  private _token: string = '';

  public async getEntity<T>(path: string): Promise<T> {
    await this._init();
    const { data } = await axios.get(`${process.env.VIRTUOUS_API_BASE_URI}/${path}`, {
      headers: {
        Authorization: `Bearer ${this._token}`
      }
    });

    return data;
  }

  public async getEntityById<T>(path: string): Promise<T> {
    await this._init();
    const { data } = await axios.get(`${process.env.VIRTUOUS_API_BASE_URI}/${path}`, {
      headers: {
        Authorization: `Bearer ${this._token}`
      }
    });

    return data;
  }

  public async getEntities<T>(path: string): Promise<T[]> {
    await this._init();
    const { data } = await axios.get(`${process.env.VIRTUOUS_API_BASE_URI}/${path}`, {
      headers: {
        Authorization: `Bearer ${this._token}`
      }
    });

    return data?.list ?? data;
  }

  public async queryEntities<T>(path: string, query: {}): Promise<T[]> {
    await this._init();
    const { data } = await axios.post(`${process.env.VIRTUOUS_API_BASE_URI}/${path}`, query, {
      headers: { Authorization: `Bearer ${this._token}` }
    });

    return data?.list ?? data;
  }

  public async findEntities<T>(path: string, search: string): Promise<T[]> {
    await this._init();
    const { data } = await axios.post(
      `${process.env.VIRTUOUS_API_BASE_URI}/${path}`,
      { search: search },
      { headers: { Authorization: `Bearer ${this._token}` } }
    );

    return data?.list ?? data;
  }

  public async createEntity<T>(path: string, entity: Partial<T>): Promise<T> {
    await this._init();
    const { data } = await axios.post(`${process.env.VIRTUOUS_API_BASE_URI}/${path}`, entity, {
      headers: { Authorization: `Bearer ${this._token}` }
    });

    return data;
  }

  public async updateEntity<T>(path: string, entity: T): Promise<T> {
    await this._init();
    const { data } = await axios.put(`${process.env.VIRTUOUS_API_BASE_URI}/${path}`, entity, {
      headers: { Authorization: `Bearer ${this._token}` }
    });

    return data;
  }

  public async deleteEntity(path: string): Promise<void> {
    await this._init();
    await axios.delete(`${process.env.VIRTUOUS_API_BASE_URI}/${path}`, {
      headers: { Authorization: `Bearer ${this._token}` }
    });
  }

  // Private Methods

  private async _init() {
    try {
      this._token = await new Auth().getToken();
    } catch (error) {
      throw error;
    }
  }
}
