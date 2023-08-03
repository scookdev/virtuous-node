import { Entity } from './entity';
import { IProject } from './types/Project';

export class Project {
  public async getProjectById(projectId: number): Promise<IProject> {
    try {
      const project = new Entity();
      const path = `api/Project/${projectId}`;

      return await project.getEntityById<IProject>(path);
    } catch (error: any) {
      throw new Error(`Error getting project ${projectId}: ${error}`);
    }
  }

  public async getProjectByCode(code: string): Promise<IProject> {
    try {
      const project = new Entity();
      const path = `api/Project/Code/${code}`;

      return await project.getEntity<IProject>(path);
    } catch (error: any) {
      throw new Error(`Error getting project by code ${code}: ${error}`);
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
      throw new Error(`Error finding projects with search text '${search}': ${error}`);
    }
  }

  public async createProject(entity: IProject, disableWebhookUpdates = false) {
    try {
      const project = new Entity();
      const path = `/api/Project?disableWebhookUpdates=${disableWebhookUpdates}`;

      await project.createEntity<IProject>(path, entity);
    } catch (error: any) {
      throw new Error(`Error creating project ${entity}: ${error}`);
    }
  }

  public async updateProject(projectId: number, entity: IProject, disableWebhookUpdates = false) {
    try {
      const project = new Entity();
      const path = `api/Project/${projectId}?disableWebhookUpdates=${disableWebhookUpdates}`;

      await project.updateEntity<IProject>(path, entity);
    } catch (error: any) {
      throw new Error(`Error updating project ${projectId}: ${error}`);
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
      throw new Error(`Error updating balance of project ${projectId}: ${error}`);
    }
  }
}
