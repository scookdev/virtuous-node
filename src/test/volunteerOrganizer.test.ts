import { VolunteerOrganizer } from '../volunteerOrganizer';
import { IVolunteerOrganizer } from '../types/VolunteerOrganizer';

let payload: IVolunteerOrganizer;

describe('Volunteer', () => {
  describe('#getVolunteerOrganizer', () => {
    it('gets volunteer organizers', async () => {
      const volunteerOrganizer = new VolunteerOrganizer();

      try {
        const c = await volunteerOrganizer.getVolunteerOrganizers(4);
        console.log('Volunteer Opportunities', c);
      } catch (error: any) {
        console.log(error.message);
      }
    });
  });

  describe('#getVolunteerOrganizerForVolunteer', () => {
    it('gets volunteer attendance for a volunteer', async () => {
      const volunteerOrganizer = new VolunteerOrganizer();

      try {
        const c = await volunteerOrganizer.getVolunteerOrganizer('4', 1);
        console.log('Volunteer Opportunities', c);
      } catch (error: any) {
        console.log(error.message);
      }
    });
  });

  describe('#createVolunteerOrganizer', () => {
    it('creates a new volunteer attendance', async () => {
      const volunteer = new VolunteerOrganizer();
      const data = await volunteer.createVolunteerOrganizer({
        volunteerId: 5,
        volunteerOpportunityId: '4'
      });
      console.log('Response', data);
    });
  });

  describe('#updateVolunteerOrganizer', () => {
    it('updates a volunteer oppportunity', async () => {
      const volunteer = new VolunteerOrganizer();
      console.log('payload', payload);
      const data = await volunteer.updateVolunteerOrganizer(4, payload);
      console.log('Response', data);
    });
  });
});
