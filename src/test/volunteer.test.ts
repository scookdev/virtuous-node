import { Volunteer } from '../volunteer';
import { IVolunteer } from '../types/Volunteer';
import _ from 'lodash';

let payload: Partial<IVolunteer>;

describe('Volunteer', () => {
  beforeAll(() => {
    payload = {
      contactIndividualId: 3975
    };
  });
  describe('#getVolunteer', () => {
    it('returns a volunteer', async () => {
      const volunteer = new Volunteer();
      const data = volunteer.getVolunteer(3941, '4');
      console.log(data);
    });
  });

  describe('#getVolunteersByOpportunity', () => {
    it('gets volunteers', async () => {
      const volunteer = new Volunteer();
      const data = await volunteer.getVolunteersByOpportunity(4);
      console.log(data);
    });
  });

  describe('#createVolunteer', () => {
    it('creates a new volunteer', async () => {
      const volunteer = new Volunteer();
      console.log('Volunteer', volunteer);
      console.log('payload', payload);
      const data = await volunteer.createVolunteer(4, payload);
      console.log('Response', data);
    });
  });

  describe('#getVolunteerQueryOptions', () => {
    it('returns volunteer query options', async () => {
      const volunteer = new Volunteer();
      const data = await volunteer.getVolunteerQueryOptions();
      console.log('getVolunteerQueryOptions', data);
    });
  });

  describe('queryVolunteers', () => {
    it('returns volunteer', async () => {
      const volunteer = new Volunteer();
      const data = await volunteer.queryVolunteers({
        groups: [
          { conditions: [{ parameter: 'Volunteer Opportunity Id', operator: 'Is', value: 2 }] }
        ]
      });
      console.log('queryVolunteer', data);
    });
  });
});
