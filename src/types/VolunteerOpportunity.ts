import { IVolunteer } from './Volunteer';
import { ICustomField } from './CustomField';

export interface IVolunteerOpportunity {
  id?: number;
  volunteerOpportunityUrl?: string;
  name: string;
  locationName: string;
  displayAddress: string;
  startDateTime: string;
  endDateTime: string;
  preferredDateTime?: string;
  timeZone?: string;
  description: string;
  isActive: boolean;
  isLocalOnly?: boolean;
  preferredNumberOfHours?: number;
  projectId: number;
  totalVolunteers: number;
  totalVolunteerHours?: number;
  volunteerOrganizers?: IVolunteer[];
  currentNeed?: number;
  currentPriority?: string;
  currentPriorityName?: string;
  currentNeedFilledPercentage?: number;
  hoursFilledPercentage?: number;
  volunteerOrganizersUrl?: string;
  volunteersUrl?: string;
  customFields?: ICustomField[];
}
