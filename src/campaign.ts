import { ICampaign } from './types/Campaign';
import { Entity } from './entity';
import { IQueryGroup, IQueryOptionGroup } from './types/Query';

export class Campaign {
  public async getCampaignById(campaignId: number): Promise<ICampaign> {
    try {
      const campaign = new Entity();
      const path = `api/Campaign/${campaignId}`;

      return await campaign.getEntityById<ICampaign>(path);
    } catch (error: any) {
      console.error('#getCampaignById error', `campaignId ${campaignId}, ${error.message}`);
      throw error;
    }
  }

  public async getCampaignSteps(campaignId: number): Promise<ICampaign> {
    try {
      const campaign = new Entity();
      const path = `api/Campaign/GetStepsByCampaignId/${campaignId}`;

      return await campaign.getEntityById<ICampaign>(path);
    } catch (error: any) {
      console.error('#getCampaignSteps error', error.message);
      throw error;
    }
  }

  public async queryCampaigns(
    query: IQueryGroup,
    skip: number = 0,
    take: number = 25
  ): Promise<ICampaign[]> {
    try {
      console.log(query);
      const campaign = new Entity();
      const path = `api/Campaign/Query/?skip=${skip}&take=${take}`;

      return await campaign.queryEntities<ICampaign>(path, query);
    } catch (error: any) {
      console.error('#queryCampaigns error', `query ${JSON.stringify(query)}, ${error.message}`);
      throw error;
    }
  }

  public async getCampaignQueryOptions(): Promise<IQueryOptionGroup[]> {
    try {
      const campaign = new Entity();
      const path = 'api/Campaign/QueryOptions';

      const data = await campaign.getEntities<IQueryOptionGroup>(path);

      return data;
    } catch (error: any) {
      console.error('#getCampaignQueryOptions error', error.message);
      throw error;
    }
  }
}
