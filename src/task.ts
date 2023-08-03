import { Entity } from './entity';
import { ITask } from './types/Task';

export class Task {
  public async getTaskTypes() {
    try {
      const task = new Entity();
      const path = 'api/Task/Types';

      return await task.getEntities<ITask>(path);
    } catch (error: any) {
      throw new Error(`Error getting task types: ${error}`);
    }
  }

  public async createTask(task: ITask) {
    try {
      const entity = new Entity();
      const path = 'api/Task';

      return await entity.createEntity<ITask>(path, task);
    } catch (error: any) {
      throw new Error(`Error getting task types: ${error}`);
    }
  }
}
