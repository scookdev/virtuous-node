import { ICustomField } from './CustomField';

export enum GrantStatus {
  ACTIVE = 'Active',
  DID_NOT_APPLY = 'Did Not Apply',
  LOST = 'Lost',
  UPCOMING = 'Upcoming',
  WON = 'Won'
}

export enum GrantType {
  INCOMING = 'Incoming',
  OUTGOING = 'Outgoing'
}

export interface IGrant {
  ownerId: number;
  title: string;
  grantingOrganizationId: number;
  description?: string;
  referenceId?: string;
  receivingOrganizationId: number;
  projectId?: number;
  dueDate?: Date;
  totalAnticipatedAmount?: number;
  status?: GrantStatus;
  submissionDate?: Date;
  anticipatedAwardDate?: Date;
  pointOfContactName?: string;
  pointOfContactEmail?: string;
  pointOfContactPhone?: string;
  website?: string;
  awardedGrant?: boolean;
  awardedAmount?: number;
  awardedDate?: Date;
  awardTerms?: string;
  grantType?: GrantType;
  customFields?: ICustomField[];
}
