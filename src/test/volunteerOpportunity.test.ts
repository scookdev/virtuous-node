import { VolunteerOpportunity } from '../volunteerOpportunity';
import { IVolunteerOpportunity } from '../types/VolunteerOpportunity';

let payload: IVolunteerOpportunity;

describe('Volunteer', () => {
  beforeAll(() => {
    payload = {
      volunteerOpportunityUrl: 'url.com',
      name: 'Foo Bar',
      locationName: 'Charlotte',
      displayAddress: '123 Vine St',
      startDateTime: '2022-09-01 08:00:00',
      endDateTime: '2022-09-30 17:00:00',
      preferredDateTime: '2022-09-01 08:00:00',
      timeZone: 'EST',
      description: 'Foo Bar',
      isActive: true,
      isLocalOnly: true,
      preferredNumberOfHours: 8,
      projectId: 15,
      totalVolunteers: 10,
      totalVolunteerHours: 80
    };
  });

  describe('#getVolunteerOpportunities', () => {
    it.only('gets volunteer opportunities', async () => {
      const volunteerOpportunity = new VolunteerOpportunity();

      const c = await volunteerOpportunity.getVolunteerOpportunities(0, 5);
      console.log('Volunteer Opportunities', c);
    });
  });

  describe('#createVolunteerOpportunity', () => {
    it('creates a new volunteer oppportunity', async () => {
      const volunteer = new VolunteerOpportunity();
      console.log('payload', payload);
      const data = await volunteer.createVolunteerOpportunity(payload);
      console.log('Response', data);
    });
  });

  describe('#updateVolunteerOpportunity', () => {
    it.only('updates a volunteer oppportunity', async () => {
      const volunteer = new VolunteerOpportunity();
      payload.name = 'Foo Bar';
      console.log('payload', payload);
      const data = await volunteer.updateVolunteerOpportunity(4, payload);
      console.log('Response', data);
    });
  });
});
