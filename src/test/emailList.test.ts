import { EmailList } from '../emailList';

describe('EmailList', () => {
  describe('#findEmailList', () => {
    it('returns an array of IEmail objects', async () => {
      try {
        const emailList = new EmailList();
        const list = await emailList.getEmailListById(1001);
        console.log('Email List', list);
      } catch (err) {
        console.log('Error', err);
      }
    });
  });
});
