import { Entity } from './entity';
import { IEmailList } from './types/EmailList';

export class EmailList {
  public async getEmailListById(emailListId: number): Promise<IEmailList> {
    try {
      const emailList = new Entity();
      const path = `api/EmailList/${emailListId}`;

      return emailList.getEntityById<IEmailList>(path);
    } catch (error: any) {
      throw new Error(`Error getting email list ${emailListId}: ${error}`);
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
      throw new Error(`Error finding email lists with search text '${search}': ${error}`);
    }
  }

  public async createEmailList(emailList: IEmailList) {
    try {
      const entity = new Entity();
      const path = 'api/EmailList';

      await entity.createEntity<IEmailList>(path, emailList);
    } catch (error: any) {
      throw new Error(`Error creating email list ${emailList}: ${error}`);
    }
  }

  public async updateEmailList(emailListId: number, emailList: IEmailList) {
    try {
      const entity = new Entity();
      const path = `api/EmailList/${emailListId}`;

      await entity.updateEntity<IEmailList>(path, emailList);
    } catch (error: any) {
      throw new Error(`Error updating email list ${emailListId}: ${error}`);
    }
  }

  // TODO Add contact individuals to email lists endpoint
}
