import { IEvent, IEventResponse } from './types/Event';
import { Entity } from './entity';

export class Event {
  public async getEventById(eventId: number): Promise<IEventResponse> {
    try {
      const event = new Entity();
      const path = `api/Event/${eventId}`;

      return await event.getEntityById<IEventResponse>(path);
    } catch (error: any) {
      throw new Error(`Error getting event ${eventId}: ${error}`);
    }
  }

  public async getEvents(skip: number = 0, take: number = 25): Promise<IEventResponse[]> {
    try {
      const event = new Entity();
      const path = `api/Event?skip=${skip}&take=${take}`;

      return await event.getEntities<IEventResponse>(path);
    } catch (error: any) {
      throw new Error(`Error getting events: ${error}`);
    }
  }

  public async getGifts(
    eventId: number,
    sortBy: string = 'GiftDate',
    descending: boolean = true,
    skip: number = 0,
    take: number = 25
  ) {
    try {
      const event = new Entity();
      const path = `api/Gift/ByEvent/${eventId}?sortBy=${sortBy}&descending=${descending}&skip=${skip}&take=${take}`;

      return await event.getEntities<IEvent>(path);
    } catch (error: any) {
      console.error(`Error getting gifts for event ${eventId}: ${error}`);
      throw error;
    }
  }

  public async createEvent(event: IEvent): Promise<boolean> {
    try {
      const entity = new Entity();
      const path = 'api/Event';

      await entity.createEntity<IEvent>(path, event);
      return true;
    } catch (error: any) {
      console.error(`Error creating event ${event}: ${error.message}`);
      throw error;
    }
  }

  public async updateEvent(eventId: number, event: IEvent): Promise<boolean> {
    try {
      const entity = new Entity();
      const path = `/api/Event/${eventId}`;

      await entity.updateEntity<IEvent>(path, event);
      return true;
    } catch (error: any) {
      console.error(`Error updating event ${eventId}: ${error}`);
      throw error;
    }
  }

  public async deleteEvent(eventId: number): Promise<boolean> {
    try {
      const entity = new Entity();
      const path = `/api/Event/${eventId}`;

      await entity.deleteEntity(path);
      return true;
    } catch (error: any) {
      console.error(`Error deleting event ${eventId}: ${error}`);
      throw error;
    }
  }
}
