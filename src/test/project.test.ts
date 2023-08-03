import { Project } from '../project';
import { IProject } from '../types/Project';

describe('Project', () => {
  describe('#getProjectById', () => {
    it('returns a project', async () => {
      const project = new Project();

      const p = await project.getProjectById(24);
      console.log('Project', p);
    });
  });

  describe('#getProjectByCode', () => {
    it('returns a project', async () => {
      const project = new Project();
      const p = await project.getProjectByCode('43550');
      console.log('Project', p);
    });
  });

  describe('#findProjects', () => {
    it('searches projects', async () => {
      const project = new Project();
      const data = await project.findProjects('Scholarships');

      console.log(data);
      expect(data).not.toBeNull();
    });
  });

  describe('#createProject', () => {
    it('creates a new project', async () => {
      const payload: IProject = {
        name: 'Test Project 5',
        revenueAccountingCode: 'REV5',
        inventoryStatus: 'Not Allocated',
        type: 'Education',
        location: 'Unspecified',
        onlineDisplayName: 'Test Project',
        description: 'Testing NPM Create Project Endpoint',
        externalAccountingCode: '',
        durationType: 'Ongoing',
        startDate: new Date(),
        financialNeedAmount: 100000,
        financialNeedType: 'OngoingNeed',
        financialNeedFrequency: 'Annually',
        isPublic: true,
        isActive: true,
        isAvailableOnline: true,
        isLimitedToFinancialNeed: false,
        isTaxDeductible: true,
        treatAsAccountsPayable: false,
        isRestrictedToGiftSpecifications: false,
        beginningBalance: 0,
        currentBalance: 1000,
        enableSync: true,
        customFields: []
      };

      const project = new Project();
      const data = await project.createProject(payload);
      console.log(data);
    });
  });

  describe('#updateProject', () => {
    it('updates an existing project', async () => {
      const payload: IProject = {
        name: 'Test Project 2',
        revenueAccountingCode: 'REV88',
        inventoryStatus: 'Not Allocated',
        type: 'Education',
        location: 'Unspecified',
        onlineDisplayName: 'Test Project',
        description: 'Testing NPM Create Project Endpoint',
        externalAccountingCode: '',
        durationType: 'Ongoing',
        startDate: new Date(),
        financialNeedAmount: 100000,
        financialNeedType: 'OngoingNeed',
        financialNeedFrequency: 'Annually',
        isPublic: true,
        isActive: true,
        isAvailableOnline: true,
        isLimitedToFinancialNeed: false,
        isTaxDeductible: true,
        treatAsAccountsPayable: false,
        isRestrictedToGiftSpecifications: false,
        beginningBalance: 0,
        currentBalance: 1000,
        enableSync: true,
        customFields: []
      };

      const project = new Project();
      const data = await project.updateProject(18, payload);
      console.log(data);
    });
  });

  describe('#updateBalance', () => {
    it('updates the project balances', async () => {
      const project = new Project();
      const data = await project.updateBalance(18, 5000, 150000);
      console.log(data);
    });
  });
});
