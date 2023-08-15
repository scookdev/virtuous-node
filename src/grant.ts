import { Entity } from './entity';
import { IGrant } from './types/Grant';
import { IQueryGroup, IQueryOptionGroup } from './types/Query';
import { AxiosError } from 'axios';

export class Grant {
  public async getGrantById(grantId: number): Promise<IGrant> {
    try {
      const grant = new Entity();
      const path = `api/Grant/${grantId}`;

      return await grant.getEntityById<IGrant>(path);
    } catch (error: any) {
      console.error(`Error getting grant ${grantId}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async getGrantsByContactId(
    contactId: number,
    skip: number = 0,
    take: number = 25
  ): Promise<IGrant[]> {
    try {
      const contact = new Entity();
      const path = `api/Grant/ByContact/${contactId}?skip=${skip}&take=${take}`;

      return await contact.getEntities<IGrant>(path);
    } catch (error: any) {
      console.error(`Error getting grants for contact ${contactId}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async queryGrants(
    query: IQueryGroup,
    skip: number = 0,
    take: number = 25
  ): Promise<IGrant[]> {
    try {
      console.log(query);
      const grant = new Entity();
      const path = `api/Grant/Query/?skip=${skip}&take=${take}`;

      return await grant.queryEntities<IGrant>(path, query);
    } catch (error: any) {
      console.error('#queryGrants error', `query ${JSON.stringify(query)}, ${error.message}`);
      throw new AxiosError(error);
    }
  }

  public async createGrant(grant: IGrant) {
    try {
      const entity = new Entity();
      const path = 'api/Grant';

      return await entity.createEntity<IGrant>(path, grant);
    } catch (error: any) {
      console.error(`Error creating grant ${grant}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async updateGrant(grantId: number, grant: IGrant) {
    try {
      const path = `api/Grant/${grantId}`;
      const entity = new Entity();

      return await entity.updateEntity<IGrant>(path, grant);
    } catch (error: any) {
      console.error(`Error updating grant ${grantId}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async getGrantQueryOptions(): Promise<IQueryOptionGroup[]> {
    try {
      const grant = new Entity();
      const path = 'api/Grant/QueryOptions';

      const data = await grant.getEntities<IQueryOptionGroup>(path);

      return data;
    } catch (error: any) {
      console.error(`Error getting grant query options: ${error}`);
      throw new AxiosError(error);
    }
  }
}
