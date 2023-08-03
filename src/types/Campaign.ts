export interface ICampaign {
  campaignId?: number;
  name: string;
  startDateTimeUtc?: Date;
  endDateTimeUtc?: Date;
  givingGoal?: number;
  newGiverGoal?: number;
  totalGiftGoal?: number;
  isArchived?: boolean;
}
