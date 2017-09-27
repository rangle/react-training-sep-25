import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk)),
);
