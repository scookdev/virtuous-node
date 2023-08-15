import { IVolunteerAttendance } from './types/VolunteerAttendance';
import { Entity } from './entity';
import { AxiosError } from 'axios';

export class VolunteerAttendance {
  public async getVolunteerAttendance(
    volunteerAttendanceId: number,
    volunteerOpportunityId: string
  ): Promise<IVolunteerAttendance> {
    try {
      const volunteerAttendance = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOpportunityId}/VolunteerAttendance/${volunteerAttendanceId}/${volunteerAttendanceId}`;

      return await volunteerAttendance.getEntity<IVolunteerAttendance>(path);
    } catch (error: any) {
      console.error(`Error getting volunteer attendance ${volunteerAttendanceId}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async getVolunteerAttendanceForVolunteer(
    volunteerId: number,
    volunteerOpportunityId: string
  ): Promise<IVolunteerAttendance[]> {
    try {
      const volunteerAttendance = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOpportunityId}/Volunteers/${volunteerId}/Attendance`;

      return await volunteerAttendance.getEntities<IVolunteerAttendance>(path);
    } catch (error: any) {
      console.error(`Error getting attendance for volunteer ${volunteerId}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async createVolunteerAttendance(volunteerAttendance: Partial<IVolunteerAttendance>) {
    try {
      const entity = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerAttendance.volunteerOpportunityId}/Volunteers/${volunteerAttendance.volunteerId}/Attendance`;

      return await entity.createEntity<Partial<IVolunteerAttendance>>(path, volunteerAttendance);
    } catch (error: any) {
      console.log(`Error creating volunteer attendance ${volunteerAttendance}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async updateVolunteerAttendance(volunteerAttendance: Partial<IVolunteerAttendance>) {
    try {
      const entity = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerAttendance.volunteerOpportunityId}/Attendance/${volunteerAttendance.id}`;

      return await entity.updateEntity<Partial<IVolunteerAttendance>>(path, volunteerAttendance);
    } catch (error: any) {
      console.log(`Error updating volunteer attendance ${volunteerAttendance.id}: ${error}`);
      throw new AxiosError(error);
    }
  }
}
