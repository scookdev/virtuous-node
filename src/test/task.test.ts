import { Task } from '../task';
import { ITask } from '../types/Task';

describe('task', () => {
  let payload: ITask;

  beforeAll(() => {
    payload = {
      taskType: 'General',
      task: 'Foo',
      description: 'Foo Bar Tasky',
      dueDateTime: new Date(),
      ownerEmail: 'steve@equitas.cc'
    };
  });

  describe('#createtask', () => {
    it('creates a new task', async () => {
      const task = new Task();
      const data = await task.createTask(payload);
      console.log(data);
    });
  });

  describe('#updatetask', () => {
    it('updates an existing task', async () => {
      const task = new Task();
      const data = await task.getTaskTypes();
      console.log(data);
    });
  });
});
