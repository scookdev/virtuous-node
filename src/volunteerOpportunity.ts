import { IVolunteerOpportunity } from './types/VolunteerOpportunity';
import { Entity } from './entity';

export class VolunteerOpportunity {
  public async getVolunteerOpportunity(
    volunteerOpportunityId: string
  ): Promise<IVolunteerOpportunity> {
    try {
      const volunteerOpportunity = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOpportunityId}/${volunteerOpportunityId}`;

      return await volunteerOpportunity.getEntity<IVolunteerOpportunity>(path);
    } catch (error) {
      throw new Error(`Error getting volunteer opportunity ${volunteerOpportunityId}: ${error}`);
    }
  }

  public async getVolunteerOpportunities(
    skip: number = 0,
    take: number = 10,
    name: string = ''
  ): Promise<IVolunteerOpportunity[]> {
    try {
      const volunteerOpportunity = new Entity();
      let path = `api/VolunteerOpportunity?skip=${skip}&take=${take}`;

      if (name) {
        path += `&filter=${name}`;
      }

      return await volunteerOpportunity.getEntities<IVolunteerOpportunity>(path);
    } catch (error) {
      throw new Error(`Error getting volunteer opportunities: ${error}`);
    }
  }

  public async createVolunteerOpportunity(volunteerOpportunity: IVolunteerOpportunity) {
    try {
      const entity = new Entity();
      const path = 'api/VolunteerOpportunity';

      return await entity.createEntity<IVolunteerOpportunity>(path, volunteerOpportunity);
    } catch (error) {
      console.log(`Error creating volunteer opportunity ${volunteerOpportunity}: ${error}`);
    }
  }

  public async updateVolunteerOpportunity(
    volunteerOpportunityId: number,
    volunteerOpportunity: IVolunteerOpportunity
  ) {
    try {
      const entity = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOpportunityId}`;

      return await entity.updateEntity<IVolunteerOpportunity>(path, volunteerOpportunity);
    } catch (error) {
      console.log(`Error updating volunteer opportunity ${volunteerOpportunityId}: ${error}`);
    }
  }
}
