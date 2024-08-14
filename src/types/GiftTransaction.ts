import { ICustomField } from './CustomField';
import { EmailType, PhoneType, ContactType } from './Contact';
import { GiftType, GiftFrequency } from './Gift';

export interface IDesignation {
  id: number;
  name: string;
  code: string;
  amountDesignated: string;
}
export interface IPremium {
  id: number;
  name: string;
  code: string;
  quantity: string;
}
export interface IAddress {
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postal: string;
  country?: string;
}
export interface IEventAttendee {
  eventId: number;
  eventName: string;
  invited: boolean;
  rsvp: boolean;
  rsvpResponse: boolean;
  attended: boolean;
}
export interface IGiftTransaction {
  transactionSource?: string;
  transactionId?: string;
  contact: {
    referenceId?: string;
    id?: number;
    name: string;
    type?: ContactType;
    title?: string;
    firstname: string;
    middlename?: string;
    lastname: string;
    suffix?: string;
    birthMonth?: string;
    birthDay?: string;
    birthYear?: string;
    gender?: string;
    emailType?: EmailType;
    email?: string;
    phoneType?: PhoneType;
    phone?: string;
    address?: IAddress;
    tags?: string;
    emailLists?: string[];
  };
  giftDate: string;
  cancelDate?: string;
  giftType: GiftType;
  amount: string;
  currencyCode: string;
  frequency: GiftFrequency;
  recurringGiftTransactionId?: string;
  recurringGiftTransactionUpdate?: boolean;
  pledgeFrequency?: string;
  pledgeTransactionId?: string;
  batch?: string;
  notes?: string;
  segment?: string;
  mediaOutlet?: string;
  receiptDate?: string;
  receiptSegment?: string;
  cashAccountingCode?: string;
  tribute?: string;
  tributeDedication?: {
    tributeId: number;
    tributeType: string;
    tributeFirstName: string;
    tributeLastName: string;
    tributeCity: string;
    tributeState: string;
    acknowledgeeIndividualId: number;
    acknowledgeeFirstName: string;
    acknowledgeeLastName: string;
    acknowledgeeAddress: string;
    acknowledgeeCity: string;
    acknowledgeeState: string;
    acknowledgeePostal: string;
    acknowledgeeEmail: string;
    acknowledgeePhone: string;
  };
  isPrivate?: boolean;
  isTaxDeductible?: boolean;
  checkNumber?: string;
  creditCardType?: string;
  nonCashGiftType?: string;
  nonCashGiftDescription?: string;
  stockTickerSymbol?: string;
  stockNumberOfShares?: number;
  submissionUrl?: string;
  designations?: IDesignation[];
  premiums?: IPremium[];
  customFields?: ICustomField[];
  contactIndividualId?: number;
  passthroughContact?: {
    referenceId: string;
    id: number;
    name: string;
    type: string;
    title?: string;
    firstname: string;
    middlename?: string;
    lastname: string;
    suffix: string;
    birthMonth?: string;
    birthDay?: string;
    birthYear?: string;
    gender?: string;
    emailType: EmailType;
    email: string;
    phoneType: PhoneType;
    phone: string;
    address: IAddress;
    tags?: string;
    emailLists?: string[];
  };
  eventAttendee?: IEventAttendee;
}
