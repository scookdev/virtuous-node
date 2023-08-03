import { IGiftTransaction } from '../types/GiftTransaction';
import { ContactType, EmailType, PhoneType } from '../types/Contact';
import { GiftType, GiftFrequency } from '../types/Gift';

import { GiftTransaction } from '../giftTransaction';

const payload: IGiftTransaction = {
  contact: {
    referenceId: '',
    id: 387434,
    name: 'Fred Waldo',
    type: ContactType.HOUSEHOLD,
    firstname: 'Fred',
    lastname: 'Waldo',
    suffix: '',
    emailType: EmailType.HOME_EMAIL,
    email: 'josephs@juno.com',
    phoneType: PhoneType.MOBILE_PHONE,
    phone: '100-200-3456',
    gender: 'Male',
    birthMonth: '01',
    birthDay: '01',
    birthYear: '1980',
    address: {
      address1: '610 S. Vine St.',
      address2: '',
      city: 'Atlanta',
      state: 'IL',
      postal: '61723',
      country: 'US'
    },
    tags: ''
  },
  giftDate: new Date().toString(),
  giftType: GiftType.CREDIT,
  amount: '$100.00',
  currencyCode: 'USD',
  frequency: GiftFrequency.ONCE,
  recurringGiftTransactionId: '',
  recurringGiftTransactionUpdate: true,
  pledgeFrequency: '',
  pledgeTransactionId: '',
  batch: '',
  notes: '',
  segment: '',
  mediaOutlet: '',
  receiptDate: '',
  receiptSegment: '',
  cashAccountingCode: '',
  isPrivate: false,
  isTaxDeductible: true,
  checkNumber: '',
  creditCardType: '',
  nonCashGiftType: '',
  nonCashGiftDescription: '',
  stockTickerSymbol: '',
  stockNumberOfShares: 0,
  submissionUrl: '',
  designations: [
    {
      id: 0,
      name: '',
      code: '',
      amountDesignated: ''
    }
  ],
  premiums: [
    {
      id: 0,
      name: '',
      code: '',
      quantity: ''
    }
  ],
  contactIndividualId: 469241
};

describe('#createGiftTransaction', () => {
  it('creates a new gift transaction', async () => {
    const giftTransaction = new GiftTransaction();
    const data = await giftTransaction.createGiftTransaction(payload);
    console.log('Response', data);
  });
});
