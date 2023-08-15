import { Entity } from './entity';
import { IEmailList } from './types/EmailList';
import { AxiosError } from 'axios';

export class EmailList {
  public async getEmailListById(emailListId: number): Promise<IEmailList> {
    try {
      const emailList = new Entity();
      const path = `api/EmailList/${emailListId}`;

      return emailList.getEntityById<IEmailList>(path);
    } catch (error: any) {
      console.error(`Error getting email list ${emailListId}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async findEmailLists(
    search: string,
    skip: number = 0,
    take: number = 25
  ): Promise<IEmailList[]> {
    try {
      const emailList = new Entity();
      const path = `api/EmailList/Search/?skip=${skip}&take=${take}`;

      return await emailList.findEntities<IEmailList>(path, search);
    } catch (error: any) {
      console.error(`Error finding email lists with search text '${search}': ${error}`);
      throw new AxiosError(error);
    }
  }

  public async createEmailList(emailList: IEmailList) {
    try {
      const entity = new Entity();
      const path = 'api/EmailList';

      await entity.createEntity<IEmailList>(path, emailList);
    } catch (error: any) {
      console.error(`Error creating email list ${emailList}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async updateEmailList(emailListId: number, emailList: IEmailList) {
    try {
      const entity = new Entity();
      const path = `api/EmailList/${emailListId}`;

      await entity.updateEntity<IEmailList>(path, emailList);
    } catch (error: any) {
      console.error(`Error updating email list ${emailListId}: ${error}`);
      throw new AxiosError(error);
    }
  }

  // TODO Add contact individuals to email lists endpoint
}
