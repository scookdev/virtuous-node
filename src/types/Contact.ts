import { ICustomField } from './CustomField';

export enum ContactType {
  HOUSEHOLD = 'Household',
  FOUNDATION = 'Foundation',
  ORGANIZATION = 'Organization',
  CHURCH = 'Church',
  SCHOOL = 'School'
}
export enum EmailType {
  HOME_EMAIL = 'Home Email',
  WORK_EMAIL = 'Work Email',
  OTHER_EMAIL = 'Other Email'
}
export enum PhoneType {
  HOME_PHONE = 'Home Phone',
  MOBILE_PHONE = 'Mobile Phone',
  WORK_PHONE = 'Work Phone',
  OTHER_PHONE = 'Other Phone'
}
export interface IContactIndividual {
  firstName: string;
  lastName: string;
  prefix?: string;
  middleName?: string;
  suffix?: string;
  birthMonth?: number;
  birthDay?: number;
  birthYear?: number;
  approximateAge?: number;
  gender?: string;
  passion?: string;
  isPrimary: boolean;
  isSecondary?: boolean;
  isDeceased?: boolean;
  contactMethods?: IContactMethod[];
  customFields?: ICustomField[];
}

export interface IContactMethod {
  type: EmailType | PhoneType;
  value: string;
  isOptedIn?: boolean;
  isPrimary?: boolean;
}
export interface IContactAddress {
  label: string;
  address1: string;
  address2?: string;
  city: string;
  stateCode: string;
  postal: string;
  countryCode?: string;
  isPrimary: boolean;
  latitude?: number;
  longitude?: number;
}
export interface IContact {
  contactType: ContactType;
  referenceSource?: string;
  referenceId?: string;
  name: string;
  informalName?: string;
  description?: string;
  website?: string;
  maritalStatus?: string;
  anniversaryMonth?: number;
  anniversaryDay?: number;
  anniversaryYear?: number;
  originSegmentId?: number;
  isPrivate?: boolean;
  isArchived?: boolean;
  contactAddresses?: IContactAddress[];
  contactIndividuals?: IContactIndividual[];
  customFields?: ICustomField[];
  customCollections?: [
    {
      name: string;
      fields: [
        {
          name: string;
          value: string;
        }
      ];
    }
  ];
}
