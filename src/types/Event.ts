import { ICustomField } from './CustomField';

export enum EventType {
  ACQUISITION = 'Aquisition',
  AUCTION = 'Auction',
  BENEFIT = 'Benefit',
  CULTIVATION = 'Cultivation',
  FUNDRAISING = 'Fundraising',
  GALA = 'Gala',
  RUN = 'Run'
}

export interface IGenerosityEventContact {
  id: number;
  eventContactUrl: string;
  contactId: number;
  contactUrl: string;
  displayName: string;
  firstName: string;
  avatarUrl: string;
  primaryPhone: string;
  primaryEmail: string;
}

export interface IEventResponse {
  id?: number;
  eventViewUrl: string;
  name: string;
  eventType: EventType;
  locationName: string;
  displayAddress: string;
  geocodeAddress: string;
  startDateTime: string;
  endDateTime: string;
  timeZone: string;
  description: string;
  specialInstructions: string;
  inviteOnly: boolean;
  rsvpRequired: boolean;
  totalInvites: number;
  totalRsvps: number;
  totalAttended: number;
  totalGifts: number;
  totalGiving: string;
  communicationId: number;
  createDateTimeUtc: Date;
  createByUser: string;
  modifiedDateTimeUtc: Date;
  modifiedByUser: string;
  eventContactsUrl: string;
  generosityEventContacts: IGenerosityEventContact[];
  tables: string[];
  meals: string[];
  eventInvitationsUrl: string;
  customFields: ICustomField[];
}

export interface IEvent {
  id?: number;
  name: string;
  eventType: EventType;
  locationName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postal: string;
  country: string;
  eventbrightId: string;
  startDateTime: string;
  endDateTime: string;
  timeZone: string;
  description: string;
  specialInstructions: string;
  inviteOnly: boolean;
  rsvpRequired: boolean;
  communicationId?: number;
  tables: string[];
  meals: string[];
  customFields: ICustomField[];
}
