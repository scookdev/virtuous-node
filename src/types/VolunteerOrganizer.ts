import { IVolunteer } from './Volunteer';
import { ICustomField } from './CustomField';

export interface IVolunteerOrganizer {
  id: number;
  volunteerOrganizerUrl: string;
  volunteerId: number;
  volunteerUrl: string;
  volunteerOpportunityId: string;
  volunteerOpportunityUrl: string;
  hours: number;
  startDateTimeUtc: Date;
  startDateTime: Date;
  endDateTimeUtc: Date;
  endDateTime: Date;
  timeZone: string;
  createDateTimeUtc: Date;
  createdByUser: string;
  modifiedDateTimeUtc: Date;
  modifiedByUser: string;
}
