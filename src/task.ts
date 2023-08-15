import { Entity } from './entity';
import { ITask } from './types/Task';
import { AxiosError } from 'axios';

export class Task {
  public async getTaskTypes() {
    try {
      const task = new Entity();
      const path = 'api/Task/Types';

      return await task.getEntities<ITask>(path);
    } catch (error: any) {
      console.error(`Error getting task types: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async createTask(task: ITask) {
    try {
      const entity = new Entity();
      const path = 'api/Task';

      return await entity.createEntity<ITask>(path, task);
    } catch (error: any) {
      console.error(`Error creating task ${task}: ${error}`);
      throw new AxiosError(error);
    }
  }
}
