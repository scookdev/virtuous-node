import { Gift } from '../gift';
import _ from 'lodash';

const dateQuery = {
  groups: [
    {
      conditions: [
        {
          parameter: 'Create Date',
          operator: 'GreaterThan',
          value: '02/01/2023'
        }
      ]
    }
  ],
  sortBy: 'Id',
  descending: false
};

describe('#getGift', () => {
  it('returns a gift', async () => {
    const gift = new Gift();
    const data = await gift.getGiftById(1609836);
    console.log('Response', data);
  });
});

describe('#queryGifts', () => {
  it('finds gifts based on search criteria', async () => {
    const gift = new Gift();
    const data = await gift.queryGifts(dateQuery);
    console.log('Response', data);
  });
});
