import { uiReducer, UPDATE_QUERY } from './reducers';

const uiInitialState = {
  query: '',
  error: null,
};

describe('Reducers', () => {
  describe('uiReducer', () => {
    it('should update query', () => {
      const state = uiReducer(uiInitialState, {
        type: UPDATE_QUERY,
        payload: 'Ervin',
      });

      expect(state).toEqual({
        query: 'Ervin',
        error: null,
      });
    });
  });

  describe('usersReducer', () => {});
});
