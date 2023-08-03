export interface IVolunteerAttendance {
  id: number;
  volunteerAttendanceUrl: string;
  volunteerId: number;
  volunteerUrl: string;
  volunteerOpportunityId: number;
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
