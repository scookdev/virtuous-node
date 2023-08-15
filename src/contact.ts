import { IContact } from './types/Contact';
import { IContactTag } from './types/ContactTag';
import { IGift } from './types/Gift';
import { Entity } from './entity';
import { AxiosError } from 'axios';

export class Contact {
  public async getContactById(contactId: number): Promise<IContact> {
    try {
      const contact = new Entity();
      const path = `api/Contact/${contactId}`;

      return await contact.getEntityById<IContact>(path);
    } catch (error: any) {
      console.error(`#getContactById error, contactId ${contactId}`, error.message);
      throw new AxiosError(error);
    }
  }

  public async findContacts(
    search: string,
    skip: number = 0,
    take: number = 25
  ): Promise<IContact[]> {
    try {
      const contact = new Entity();
      const path = `api/Contact/Search/?skip=${skip}&take=${take}`;

      return await contact.findEntities<IContact>(path, search);
    } catch (error: any) {
      console.error(`#fundContacts error, search text: ${search}`, error.message);
      throw new AxiosError(error);
    }
  }

  public async getGifts(
    contactId: number,
    sortBy: string = 'GiftDate',
    descending: boolean = true,
    skip: number = 0,
    take: number = 100
  ): Promise<IGift[]> {
    try {
      const contact = new Entity();
      const path = `api/Gift/ByContact/${contactId}?sortBy=${sortBy}&descending=${descending}&skip=${skip}&take=${take}`;

      return await contact.getEntities<IGift>(path);
    } catch (error: any) {
      console.error(`#getGifts error, contactId ${contactId}: ${error.message}`);
      throw new AxiosError(error);
    }
  }

  public async getTotalGiving(contactId: number, year?: number) {
    try {
      // TODO: loop to make sure all gifts are retrieved
      const entity = new Entity();
      const path = `api/Gift/ByContact/${contactId}?take=100`;

      let gifts = await entity.getEntities<IGift>(path);
      let filtered: IGift[] = [];
      if (year !== undefined) {
        filtered = gifts.filter((gift: IGift) => {
          return this._getYear(gift.giftDate) === year;
        });
      }

      const totalGiving = filtered.reduce((memo: number, gift: any) => {
        return memo + this._toNumber(gift.amount);
      }, 0);

      return totalGiving;
    } catch (error: any) {
      console.error(`#getTotalGiving error, contactId ${contactId}, ${error}`);
      throw new AxiosError(error);
    }
  }

  public async createContact(contact: IContact) {
    try {
      const entity = new Entity();
      const path = 'api/Contact';

      await entity.createEntity<IContact>(path, contact);
    } catch (error: any) {
      console.error(`Error creating contact ${contact}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async updateContact(contactId: number, contact: IContact) {
    try {
      const entity = new Entity();
      const path = `/api/Contact/${contactId}`;

      await entity.updateEntity<IContact>(path, contact);
    } catch (error: any) {
      console.error(`Error updating contact ${contactId}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async createTag(contactTag: IContactTag) {
    try {
      const entity = new Entity();
      const path = 'api/ContactTag';

      await entity.createEntity<IContactTag>(path, contactTag);
    } catch (error: any) {
      console.error(`Error creating contactTag ${contactTag}: ${error}`);
      throw new AxiosError(error);
    }
  }

  // Private Methods

  private _toNumber = (inString: string): number => {
    return Number(inString.replace(/[^0-9\.]+/g, ''));
  };

  private _getYear = (inString: string): number => {
    return new Date(inString).getFullYear();
  };
}
