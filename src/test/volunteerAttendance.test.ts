import { VolunteerAttendance } from '../volunteerAttendance';
import { IVolunteerAttendance } from '../types/VolunteerAttendance';

let payload: Partial<IVolunteerAttendance>;

describe('Volunteer', () => {
  beforeAll(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);

    payload = {
      id: 1,
      volunteerId: 1633,
      volunteerOpportunityId: 4,
      timeZone: 'EST',
      hours: 30,
      startDateTimeUtc: new Date(),
      endDateTimeUtc: d
    };
  });

  describe('#getVolunteerAttendance', () => {
    it('gets volunteer attendance', async () => {
      const volunteerAttendance = new VolunteerAttendance();

      const c = await volunteerAttendance.getVolunteerAttendance(5, '2');
      console.log('Volunteer Opportunities', c);
    });
  });

  describe('#getVolunteerAttendanceForVolunteer', () => {
    it('gets volunteer attendance for a volunteer', async () => {
      const volunteerAttendance = new VolunteerAttendance();

      const c = await volunteerAttendance.getVolunteerAttendanceForVolunteer(5, '4');
      console.log('Volunteer Opportunities', c);
    });
  });

  describe('#createVolunteerAttendance', () => {
    it('creates a new volunteer attendance', async () => {
      const volunteer = new VolunteerAttendance();
      const data = await volunteer.createVolunteerAttendance(payload);
      console.log('Response', data);
    });
  });

  describe('#updateVolunteerAttendance', () => {
    it('updates volunteer attendance', async () => {
      const volunteer = new VolunteerAttendance();
      console.log('payload', payload);
      const data = await volunteer.updateVolunteerAttendance(payload);
      console.log('Response', data);
    });
  });
});
