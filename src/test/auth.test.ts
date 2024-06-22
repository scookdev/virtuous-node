import { Auth } from '../auth';
import axios from 'axios';

describe('Auth', () => {
  it('returns a new session', async () => {
    const auth = new Auth();
    const token = await auth.getToken();

    expect(token).toBe('foo');
  });

  it('calls axios.post', async () => {
    const auth = new Auth();
    await auth.getToken();

    expect(axios.post).toHaveBeenCalled();
  });

  it('returns organizations', async () => {
    const auth = new Auth();
    const orgs = await auth.getOrganizations();
    console.log(orgs);
  });

  it('returns current user permissions', async () => {
    const auth = new Auth();
    const orgs = await auth.getPermissions();
    console.log(orgs);
  });
});
