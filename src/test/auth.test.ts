import { Auth } from '../auth';
import axios from 'axios';

describe('#getToken', () => {
  const mockedResponse = {
    data: {
      access_token: 'foo',
      token_type: 'bar',
      expires_in: 30,
      refresh_token: 'quz',
      userName: 'foo@bar.com',
      twoFactorEnabled: 'False',
      '.issued': new Date(),
      '.expires': new Date()
    }
  };

  it('returns a new session', async () => {
    axios.post = jest.fn().mockResolvedValue(mockedResponse);
    const auth = new Auth();
    const token = await auth.getToken();

    expect(token).toBe('foo');
  });

  it('calls axios.post', async () => {
    axios.post = jest.fn().mockResolvedValue(mockedResponse);
    const auth = new Auth();
    await auth.getToken();

    expect(axios.post).toHaveBeenCalled();
  });
});
