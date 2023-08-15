import { Entity } from './entity';
import { IProject } from './types/Project';
import { AxiosError } from 'axios';

export class Project {
  public async getProjectById(projectId: number): Promise<IProject> {
    try {
      const project = new Entity();
      const path = `api/Project/${projectId}`;

      return await project.getEntityById<IProject>(path);
    } catch (error: any) {
      console.error(`Error getting project ${projectId}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async getProjectByCode(code: string): Promise<IProject> {
    try {
      const project = new Entity();
      const path = `api/Project/Code/${code}`;

      return await project.getEntity<IProject>(path);
    } catch (error: any) {
      console.error(`Error getting project by code ${code}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async findProjects(
    search: string,
    skip: number = 0,
    take: number = 25
  ): Promise<IProject[]> {
    try {
      const project = new Entity();
      const path = `api/Project/Search/?skip=${skip}&take=${take}`;

      return await project.findEntities<IProject>(path, search);
    } catch (error: any) {
      console.error(`Error finding projects, with search text 'search': ${error}`);
      throw new AxiosError(error);
    }
  }

  public async createProject(entity: IProject, disableWebhookUpdates = false) {
    try {
      const project = new Entity();
      const path = `/api/Project?disableWebhookUpdates=${disableWebhookUpdates}`;

      await project.createEntity<IProject>(path, entity);
    } catch (error: any) {
      console.error(`Error creating project ${entity}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async updateProject(projectId: number, entity: IProject, disableWebhookUpdates = false) {
    try {
      const project = new Entity();
      const path = `api/Project/${projectId}?disableWebhookUpdates=${disableWebhookUpdates}`;

      await project.updateEntity<IProject>(path, entity);
    } catch (error: any) {
      console.error(`Error updating project ${projectId}: ${error}`);
      throw new AxiosError(error);
    }
  }

  public async updateBalance(projectId: number, beginningBalance: number, currentBalance: number) {
    try {
      const project = new Entity();
      const path = `api/Project/${projectId}/Balance`;
      const payload = {
        beginningBalance: beginningBalance,
        currentBalance: currentBalance
      };

      await project.updateEntity(path, payload);
    } catch (error: any) {
      console.error(`Error updating balance of project ${projectId}: ${error}`);
      throw new AxiosError(error);
    }
  }
}
