// Action Types
const UPDATE_USERS = 'robodex/UPDATE_USERS';
const UPDATE_QUERY = 'robodex/UPDATE_QUERY';

const initialState = {
  users: [],
  query: '',
};

// Reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUERY:
      return { ...state, query: action.payload };
    case UPDATE_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

// Action Creators
export function updateQuery(query) {
  return { type: UPDATE_QUERY, payload: query };
}

export function updateUsers(users) {
  return { type: UPDATE_USERS, payload: users };
}
