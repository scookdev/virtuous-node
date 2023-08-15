import { ITag } from './types/Tag';
import { Entity } from './entity';
import { AxiosError } from 'axios';

export class Tag {
  public async getAllTags(skip: number = 0, take: number = 25): Promise<ITag[]> {
    try {
      const tag = new Entity();
      const path = `api/Tag?skip=${skip}&take=${take}`;

      return await tag.getEntities<ITag>(path);
    } catch (error: any) {
      console.error(`Error getting tags: ${error}`);
      throw new AxiosError(error);
    }
  }
}
