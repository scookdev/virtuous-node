import { IVolunteerAttendance } from './types/VolunteerAttendance';
import { Entity } from './entity';

export class VolunteerAttendance {
  public async getVolunteerAttendance(
    volunteerAttendanceId: number,
    volunteerOpportunityId: string
  ): Promise<IVolunteerAttendance> {
    try {
      const volunteerAttendance = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerOpportunityId}/VolunteerAttendance/${volunteerAttendanceId}/${volunteerAttendanceId}`;

      return await volunteerAttendance.getEntity<IVolunteerAttendance>(path);
    } catch (error) {
      throw new Error(`Error getting volunteer attendance ${volunteerAttendanceId}: ${error}`);
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
    } catch (error) {
      throw new Error(`Error getting volunteer attendance for ${volunteerId}: ${error}`);
    }
  }

  public async createVolunteerAttendance(volunteerAttendance: Partial<IVolunteerAttendance>) {
    try {
      const entity = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerAttendance.volunteerOpportunityId}/Volunteers/${volunteerAttendance.volunteerId}/Attendance`;

      return await entity.createEntity<Partial<IVolunteerAttendance>>(path, volunteerAttendance);
    } catch (error) {
      console.log(error);
      console.log(`Error creating volunteer attendance ${volunteerAttendance}: ${error}`);
    }
  }

  public async updateVolunteerAttendance(volunteerAttendance: Partial<IVolunteerAttendance>) {
    try {
      const entity = new Entity();
      const path = `api/VolunteerOpportunity/${volunteerAttendance.volunteerOpportunityId}/Attendance/${volunteerAttendance.id}`;

      return await entity.updateEntity<Partial<IVolunteerAttendance>>(path, volunteerAttendance);
    } catch (error) {
      console.log(`Error updating volunteer attendance ${volunteerAttendance.id}: ${error}`);
    }
  }
}
