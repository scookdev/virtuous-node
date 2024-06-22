import { Email } from '../email';

describe('Email', () => {
  describe('#findEmails', () => {
    it('returns an array of IEmail objects', async () => {
      try {
        const email = new Email();
        const emails = await email.findEmails('steve');
        console.log('Emails', emails);
      } catch (err) {
        console.log('Error', err);
      }
    });
  });
});
