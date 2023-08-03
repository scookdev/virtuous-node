import { Event } from '../event';
import { IEvent, EventType } from '../types/Event';

let payload: IEvent;

describe('Event', () => {
  beforeAll(() => {
    payload = {
      name: 'Test Event #80983',
      eventType: EventType.FUNDRAISING,
      locationName: 'Charlotte',
      address1: '123 S. Vine',
      address2: '',
      city: 'Charlotte',
      state: 'NC',
      postal: '28205',
      country: 'US',
      eventbrightId: '',
      startDateTime: '6/12/2023 8:00:00 AM',
      endDateTime: '6/30/2023 5:00:00 AM',
      timeZone: 'EST',
      description: 'Test Fundraiser #2',
      specialInstructions: '',
      inviteOnly: false,
      rsvpRequired: true,
      tables: ['test table'],
      meals: ['test meal'],
      customFields: []
    };
  });

  describe('#getEventById', () => {
    it('returns a event', async () => {
      const event = new Event();

      const e = await event.getEventById(1);
      console.log(e);
    });
  });

  describe('#getEvents', () => {
    it('gets events', async () => {
      const event = new Event();
      const data = await event.getEvents();

      console.log(data);
      expect(data).not.toBeNull();
    });
  });

  describe('#createEvent', () => {
    it('creates a new event', async () => {
      const event = new Event();
      console.log('payload', payload);
      try {
        const data = await event.createEvent(payload);
        console.log(data);
      } catch (e: any) {
        console.log('Error', e.response);
      }
    });
  });

  describe('#deleteEvent', () => {
    it('creates a new event', async () => {
      const event = new Event();
      await event.deleteEvent(2);
    });
  });

  describe('#updateEvent', () => {
    it('updates an existing event', async () => {
      const event = new Event();
      payload.name = 'Foo Bar';
      const data = await event.updateEvent(1, payload);
      console.log('Data', data);
    });
  });
});
