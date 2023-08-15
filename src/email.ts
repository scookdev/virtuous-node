import { IEmail } from './types/Email';
import { Entity } from './entity';
import { AxiosError } from 'axios';

export class Email {
  public async findEmails<IEmail>(
    search: string,
    skip: number = 0,
    take: number = 25
  ): Promise<IEmail[]> {
    try {
      const email = new Entity();
      const path = `api/Email/Search/?skip=${skip}&take=${take}`;

      return await email.findEntities<IEmail>(path, search);
    } catch (error: any) {
      console.error(`Error finding emails with search text '${search}': ${error}`);
      throw new AxiosError(error);
    }
  }
}
