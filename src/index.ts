import dotenv from 'dotenv';
import path from 'path';

// interfaces
import { ICampaign } from './types/Campaign';
import { ContactType, IContact } from './types/Contact';
import { IEmail } from './types/Email';
import { IEmailList } from './types/EmailList';
import { IEvent } from './types/Event';
import { GiftType, GiftFrequency, IGift } from './types/Gift';
import { IGiftTransaction } from './types/GiftTransaction';
import { IGrant } from './types/Grant';
import { IProject } from './types/Project';
import { ITag } from './types/Tag';
import { ITask } from './types/Task';
import { IVolunteer } from './types/Volunteer';
import { IVolunteerOpportunity } from './types/VolunteerOpportunity';
import {
  IQueryGroup,
  IQueryConditionSet,
  IQueryCondition,
  IOperatorOption,
  IQueryOption
} from './types/Query';

// classes
import { Campaign } from './campaign';
import { Contact } from './contact';
import { Email } from './email';
import { EmailList } from './emailList';
import { Event } from './event';
import { Gift } from './gift';
import { GiftTransaction } from './giftTransaction';
import { Grant } from './grant';
import { Project } from './project';
import { Tag } from './tag';
import { Task } from './task';
import { Volunteer } from './volunteer';
import { VolunteerOpportunity } from './volunteerOpportunity';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.join(__dirname, '../.env') });
}

export {
  Campaign,
  ContactType,
  Contact,
  IEmail,
  IEmailList,
  IEvent,
  GiftType,
  GiftFrequency,
  IGift,
  IGiftTransaction,
  IGrant,
  IProject,
  ITag,
  ITask,
  IVolunteer,
  IVolunteerOpportunity,
  ICampaign,
  IContact,
  Email,
  EmailList,
  Event,
  Gift,
  GiftTransaction,
  Grant,
  Project,
  Tag,
  Task,
  Volunteer,
  VolunteerOpportunity,
  IQueryGroup,
  IQueryConditionSet,
  IQueryCondition,
  IOperatorOption,
  IQueryOption
};
