export interface IVolunteer {
  id?: number;
  volunteerUrl?: string;
  contactId?: number;
  contactIndividualId: number;
  contactUrl?: string;
  displayName?: string;
  firstName: string;
  avatarUrl?: string;
  primaryPhone?: string;
  primaryEmail?: string;
  totalHours?: number;
  timesVolunteered?: number;
  volunteerAttendanceUrl?: string;
  volunteerOpportunityId: number;
  volunteerOpportunityUrl?: string;
}
