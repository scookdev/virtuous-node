import { Entity } from './entity';
import { IVolunteer } from './types/Volunteer';
import { IQueryGroup, IQueryOptionGroup } from './types/Query';

export class Volunteer {
  public async createVolunteer(volunteerOpportunityId: number, payload: Partial<IVolunteer>) {
    try {
      const entity = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOpportunityId}/Volunteers`;

      return await entity.createEntity<Partial<IVolunteer>>(path, payload);
    } catch (error: any) {
      console.log('Error', error.response.data);
      throw new Error(`Error creating volunteer: ${error}`);
    }
  }

  public async getVolunteer(
    volunteerId: number,
    volunteerOpportunityId: string
  ): Promise<IVolunteer> {
    try {
      const volunteer = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOpportunityId}/Volunteers/${volunteerId}`;

      return await volunteer.getEntity<IVolunteer>(path);
    } catch (error) {
      throw new Error(`Error getting volunteer ${volunteerId}: ${error}`);
    }
  }

  public async getVolunteersByOpportunity(
    volunteerOpportunityId: number,
    skip: number = 0,
    take: number = 10
  ): Promise<IVolunteer[]> {
    try {
      const volunteer = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOpportunityId}/Volunteers?skip=${skip}&take=${take}`;

      return await volunteer.getEntities<IVolunteer>(path);
    } catch (error) {
      throw new Error(`Error getting volunteers: ${error}`);
    }
  }

  public async queryVolunteers(query: IQueryGroup): Promise<IVolunteer[]> {
    try {
      const volunteer = new Entity();
      const path = 'api/Volunteer/Query';

      return await volunteer.queryEntities<IVolunteer>(path, query);
    } catch (error: any) {
      console.error('#queryVolunteers error', `query ${JSON.stringify(query)}, ${error.message}`);
      throw error;
    }
  }

  public async getVolunteerQueryOptions(): Promise<IQueryOptionGroup[]> {
    try {
      const volunteer = new Entity();
      const path = 'api/Volunteer/QueryOptions';

      const data = await volunteer.getEntities<IQueryOptionGroup>(path);

      return data;
    } catch (error: any) {
      console.error('#getVolunteerQueryOptions error', error.message);
      throw error;
    }
  }
}
