import { getUsers } from './users';
jest.mock('./client');

import { get } from './client';

get.mockImplementation(() => {
  return new Promise(resolve => {
    resolve([
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
      },
    ]);
  });
});

describe('users', () => {
  describe('getUsers', () => {
    it('should fetch users', () => {
      getUsers().then(users => {
        expect(users).toEqual([
          {
            uid: 1,
            name: 'Leanne Graham',
            email: 'Sincere@april.biz',
          },
          {
            uid: 2,
            name: 'Ervin Howell',
            email: 'Shanna@melissa.tv',
          },
        ]);
      });
    });
  });
});
