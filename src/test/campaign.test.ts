import { Campaign } from '../campaign';

describe('#getCampaignById', () => {
  it('returns a campaign', async () => {
    const campaign = new Campaign();
    const data = await campaign.getCampaignById(3776);
    console.log('getCampaignById', data);
  });

  it('throws an error if campaign is not found', async () => {
    const campaign = new Campaign();
    try {
      await campaign.getCampaignById(0);
    } catch (error: any) {
      console.log(error);
    }
  });
});

describe('#getCampaignSteps', () => {
  it('returns campaign steps', async () => {
    const campaign = new Campaign();
    try {
      const data = await campaign.getCampaignSteps(3776);
      console.log('getCampaignSteps', data);
    } catch (error: any) {
      console.log(error);
    }
  });
});

describe('queryCampaigns', () => {
  it('returns campaigns', async () => {
    const campaign = new Campaign();
    const data = await campaign.queryCampaigns({
      groups: [{ conditions: [{ parameter: 'Campaign Id', operator: 'Is', value: 3776 }] }]
    });
    console.log('queryCampaigns', data);
  });
});

describe('#getCampaignQueryOptions', () => {
  it('returns campaign query options', async () => {
    const campaign = new Campaign();
    const data = await campaign.getCampaignQueryOptions();
    console.log('getCampaignQueryOptions', data);
  });
});
