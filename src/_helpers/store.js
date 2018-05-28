import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();
const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
