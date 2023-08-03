import { Contact } from '../contact';
import { ContactType, EmailType, IContact } from '../types/Contact';
import { IAuthentication } from '../types/Authentication';
import { AxiosError } from 'axios';
import _ from 'lodash';

let payload: IContact;
let auth: IAuthentication;

describe('Contact', () => {
  beforeAll(() => {
    auth = {
      access_token: 'foo',
      token_type: 'bar',
      expires_in: 5000,
      refresh_token: 'baz',
      userName: 'waldo',
      twoFactorEnabled: 'fred',
      '.issued': new Date().toString(),
      '.expires': new Date().toString()
    };

    payload = {
      contactType: ContactType.HOUSEHOLD,
      referenceSource: '',
      referenceId: '',
      name: 'Fred Waldo',
      informalName: 'Freddie',
      description: 'Fred Waldo Test',
      website: 'http://www.foo.bar',
      maritalStatus: 'Single',
      anniversaryMonth: 1,
      anniversaryDay: 1,
      anniversaryYear: 2001,
      isPrivate: false,
      isArchived: false,
      contactAddresses: [
        {
          label: 'Foo',
          address1: '610 S Vine St',
          address2: '',
          city: 'Atlanta',
          stateCode: 'IL',
          postal: '61723',
          countryCode: 'US',
          isPrimary: false,
          latitude: 40,
          longitude: 89
        }
      ],
      contactIndividuals: [
        {
          firstName: 'Joe',
          lastName: 'Jumper',
          prefix: 'Mr',
          middleName: 'Bob',
          suffix: '',
          birthMonth: 1,
          birthDay: 1,
          birthYear: 1980,
          approximateAge: 42,
          gender: 'Male',
          passion: '',
          isPrimary: false,
          isSecondary: true,
          isDeceased: false,
          contactMethods: [
            {
              type: EmailType.HOME_EMAIL,
              value: 'joe@jumpers.ws',
              isOptedIn: true,
              isPrimary: true
            }
          ]
        }
      ]
    };
  });

  describe('#getContactById', () => {
    it('calls the Virtuous API', async () => {
      const contact = new Contact();
      const data = await contact.getContactById(387442);
      console.log('getContactById', data);
    });

    it('raises an error if contact is not found', async () => {
      const contact = new Contact();
      expect(await contact.getContactById(0)).toThrow(AxiosError);
    });
  });

  describe('#getGifts', () => {
    it('gets a contact gifts', async () => {
      const contact = new Contact();
      const gifts = await contact.getGifts(1773);
      console.log(gifts);
    });
  });

  describe('#getTotalGiving', () => {
    describe('when passed the year', () => {
      it('returns the total giving for the year', async () => {
        const contact = new Contact();
        const totalGiving = await contact.getTotalGiving(1773, 2020);
        console.log('Total Giving for 2020', totalGiving);
      });
    });

    it("gets a contact's total giving", async () => {
      const contact = new Contact();
      const totalGiving = await contact.getTotalGiving(1773);

      console.log('Total Giving', totalGiving);
    });
  });

  describe('#findContacts', () => {
    it('searches contacts', async () => {
      const contact = new Contact();
      const data = await contact.findContacts('Education');

      console.log(data);
      expect(data).not.toBeNull();
    });
  });

  describe('#createContact', () => {
    it('creates a new contact', async () => {
      const contact = new Contact();
      console.log('Contact', contact);
      console.log('payload', payload);
      const data = await contact.createContact(payload);
      console.log('Response', data);
    });
  });

  describe('#createContactTag', () => {
    it('creates a new contact tag', async () => {
      const contact = new Contact();
      const contactTag = {
        contactId: 1633,
        tagId: 1176
      };
      const data = await contact.createTag(contactTag);
      console.log('Response', data);
    });
  });

  describe('#updateContact', () => {
    it('updates an existing contact', async () => {
      const contact = new Contact();
      payload.name = 'Fred Waldo';
      const data = await contact.updateContact(387434, payload);
      console.log(data);
    });
  });
});
