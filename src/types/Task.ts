export interface ITask {
  taskType: string;
  task: string;
  description: string;
  dueDateTime: Date;
  ownerEmail: string;
}
