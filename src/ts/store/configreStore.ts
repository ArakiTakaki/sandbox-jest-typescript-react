import { createStore, applyMiddleware } from 'redux';
import { initialState } from './initialState';
import reducer from './reducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [];

// redux-logger
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

// redux-persist
const whitelist = [];
whitelist.push('todo_list', 'count');
const persistConfig = { key: 'todos', storage, whitelist };
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, initialState, applyMiddleware(...middleware));

export const persistor = persistStore(store);
export default store;
