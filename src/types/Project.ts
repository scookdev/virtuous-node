import { ICustomField } from './CustomField';

export interface IProject {
  name: string;
  revenueAccountingCode: string;
  inventoryStatus?: string;
  type?: string;
  location?: string;
  onlineDisplayName?: string;
  description: string;
  externalAccountingCode?: string;
  durationType?: string;
  startDate: Date;
  endDate?: Date;
  financialNeedAmount?: number;
  financialNeedType?: string;
  financialNeedFrequency?: string;
  isPublic: boolean;
  isActive: boolean;
  isAvailableOnline?: boolean;
  isLimitedToFinancialNeed?: boolean;
  isTaxDeductible?: boolean;
  treatAsAccountsPayable?: boolean;
  isRestrictedToGiftSpecifications?: boolean;
  parentId?: number;
  beginningBalance?: number;
  currentBalance?: number;
  enableSync?: boolean;
  customFields?: ICustomField[];
}
