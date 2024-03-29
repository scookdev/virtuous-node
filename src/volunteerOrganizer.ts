import { IVolunteerOrganizer } from './types/VolunteerOrganizer';
import { Entity } from './entity';
import { AxiosError } from 'axios';

export class VolunteerOrganizer {
  public async getVolunteerOrganizers(
    volunteerOpportunityId: number
  ): Promise<IVolunteerOrganizer[]> {
    try {
      const volunteerOrganizer = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOpportunityId}/Organizers`;

      const data = await volunteerOrganizer.getEntities<IVolunteerOrganizer>(path);

      return data;
    } catch (error: any) {
      console.error(
        `Error getting volunteer opportunity ${volunteerOpportunityId}: ${error?.response?.data}`
      );
      throw new AxiosError(error);
    }
  }

  public async getVolunteerOrganizer(
    volunteerOpportunityId: string,
    volunteerOrganizerId: number
  ): Promise<IVolunteerOrganizer[]> {
    try {
      const volunteerOrganizer = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOpportunityId}/Organizers/${volunteerOrganizerId}`;

      return await volunteerOrganizer.getEntities<IVolunteerOrganizer>(path);
    } catch (error: any) {
      console.error(`Error getting volunteer organizer: ${error?.response?.data}`);
      throw new AxiosError(error);
    }
  }

  public async createVolunteerOrganizer(volunteerOrganizer: Partial<IVolunteerOrganizer>) {
    try {
      const entity = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOrganizer.volunteerOpportunityId}/Organizers`;

      return await entity.createEntity<IVolunteerOrganizer>(path, volunteerOrganizer);
    } catch (error: any) {
      console.error(`Error creating volunteer organizer ${volunteerOrganizer}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async updateVolunteerOrganizer(
    volunteerOrganizerId: number,
    volunteerOrganizer: IVolunteerOrganizer
  ) {
    try {
      const entity = new Entity();
      const path = `api/VolunteerOrganizer/${volunteerOrganizerId}`;

      return await entity.updateEntity<IVolunteerOrganizer>(path, volunteerOrganizer);
    } catch (error: any) {
      console.error(
        `Error updating volunteer opportunity ${volunteerOrganizerId}: ${error?.response?.data}`
      );
      throw new AxiosError(error);
    }
  }
}
