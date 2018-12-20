import { createStore, applyMiddleware } from 'redux';
import { initialState } from './initialState';
import reducer from './reducer';
import logger from 'redux-logger';

const middleware = [];
middleware.push(logger);

const store = createStore(reducer, initialState, applyMiddleware(...middleware));
export default store;
