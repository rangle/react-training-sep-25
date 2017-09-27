import { combineReducers } from 'redux';
import { getUsers } from './api/users';

// Action Types
const UPDATE_USERS = 'robodex/UPDATE_USERS';
const UPDATE_QUERY = 'robodex/UPDATE_QUERY';
const UPDATE_ERROR = 'robodex/UPDATE_ERROR';

// Users Reducer
const userInitialState = [];

function usersReducer(state = userInitialState, action) {
  switch (action.type) {
    case UPDATE_USERS:
      return [...action.payload];
    default:
      return state;
  }
}

// UI Reducer
const uiInitialState = {
  query: '',
  error: null,
};

function uiReducer(state = uiInitialState, action) {
  switch (action.type) {
    case UPDATE_QUERY:
      return { ...state, query: action.payload };
    case UPDATE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// Root Reducer
export const reducer = combineReducers({
  users: usersReducer,
  ui: uiReducer,
});

// Action Creators
export function updateQuery(query) {
  return { type: UPDATE_QUERY, payload: query };
}

export function updateUsers() {
  return function(dispatch) {
    getUsers()
      .then(users => {
        dispatch({ type: UPDATE_USERS, payload: users });
        dispatch({ type: UPDATE_ERROR, payload: null });
      })
      .catch(err => {
        dispatch({ type: UPDATE_ERROR, payload: err.message });
      });
  };
}
