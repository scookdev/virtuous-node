import { IGift } from './types/Gift';
import { Entity } from './entity';
import { IQueryOptionGroup } from './types/Query';

export class Gift {
  public async getGiftById(giftId: number): Promise<IGift> {
    try {
      const gift = new Entity();
      const path = `api/Gift/${giftId}`;

      return await gift.getEntityById<IGift>(path);
    } catch (error: any) {
      throw new Error(`Error getting gift ${giftId}: ${error}`);
    }
  }

  public async queryGifts(
    query: {},
    skip: number = 0,
    take: number = 25,
    fullGift = false
  ): Promise<IGift[]> {
    try {
      const gift = new Entity();
      const path = fullGift
        ? `api/Gift/Query/FullGift/?skip=${skip}&take=${take}`
        : `api/Gift/Query/?skip=${skip}&take=${take}`;

      return await gift.queryEntities<IGift>(path, query);
    } catch (error: any) {
      throw new Error(`Error finding gifts with query '${JSON.stringify(query)}': ${error}`);
    }
  }

  public async getGetQueryOptions(): Promise<IQueryOptionGroup[]> {
    try {
      const gift = new Entity();
      const path = 'api/Gift/QueryOptions';

      return await gift.getEntities<IQueryOptionGroup>(path);
    } catch (error: any) {
      console.error(error);
      throw new Error(`Error getting gift query options': ${error}`);
    }
  }
}
