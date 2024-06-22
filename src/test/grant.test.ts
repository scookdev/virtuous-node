import { Grant } from '../grant';
import { IGrant } from '../types/Grant';

let payload: IGrant;

describe('Grant', () => {
  beforeAll(() => {
    payload = {
      ownerId: 60,
      title: 'Test Grant',
      grantingOrganizationId: 387435,
      description: 'Kitties Feeding Puppies',
      receivingOrganizationId: 387436,
      totalAnticipatedAmount: 250,
      awardedGrant: true,
      awardedAmount: 250,
      awardedDate: new Date()
    };
  });

  describe('#createGrant', () => {
    it('creates a grant', async () => {
      const grant = new Grant();
      try {
        const g = await grant.createGrant(payload);
        console.log('Grant', g);
      } catch (error: any) {
        console.error('Error', error.response);
      }
    });
  });

  describe('#getGrant', () => {
    it('gets a grant', async () => {
      const grant = new Grant();
      const g = await grant.getGrantById(1);
      console.log(g);
    });
  });

  describe('#getGrantsByContact', () => {
    it('gets grants by contact', async () => {
      const grant = new Grant();
      const g = await grant.getGrantsByContactId(1633);
      console.log(g);
    });
  });

  describe('#getGrantQueryOptions', () => {
    it('returns grant query options', async () => {
      const grant = new Grant();
      const data = await grant.getGrantQueryOptions();
      console.log('getGrantQueryOptions', data);
    });
  });

  describe('queryGrants', () => {
    it('returns grants', async () => {
      const grant = new Grant();
      const data = await grant.queryGrants({
        groups: [{ conditions: [{ parameter: 'Grant Status', operator: 'Is', value: 'Won' }] }]
      });
      console.log('queryCampaigns', data);
    });
  });
});
