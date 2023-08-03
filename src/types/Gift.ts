export enum GiftType {
  CASH = 'Cash',
  CHECK = 'Check',
  CREDIT = 'Credit',
  CRYPTOCOIN = 'Cryptocoin',
  EFT = 'Electronic Funds Transfer',
  NON_CASH = 'Non-Cash',
  STOCK = 'Stock',
  OTHER = 'Other',
  REVERSING_TRANSACTION = '',
  QUALIFIED_CHARITABLE_DISTRIBUTION = 'Qualified Charitable Distribution'
}
export enum GiftFrequency {
  ONCE = 'Once',
  WEEKLY = 'Weekly',
  BIMONTHLY = 'Bimonthly',
  MONTHLY = 'Monthly',
  QUARTERLY = 'Quarterly',
  SEMIANNUALLY = 'Semiannually',
  ANNUALLY = 'Annually',
  BIENNIALLY = 'Biennially'
}

export interface IGift {
  id?: number;
  contactId: number;
  contactIndividualId: number;
  giftType: GiftType;
  giftDate: string;
  amount: string;
  segment?: string;
  batch?: string;
  giftUrl?: string;
  culture?: string;
  exchangeRate?: number;
  currencyCode?: string;
  baseCurrencyCode?: string;
}
