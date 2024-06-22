import { Tag } from '../tag';

describe('Tag', () => {
  describe('#getAllTags', () => {
    it.only('gets all tags', async () => {
      const tag = new Tag();
      const tags = await tag.getAllTags();
      console.log('Tags', tags);
    });
  });
});
