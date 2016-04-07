import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authenticationMiddleware } from './middleware';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import RootReducer from '../reducers/rootReducer';


import { browserHistory } from 'react-router'

const reducers = combineReducers({
  contacts: RootReducer,
  routing: routerReducer
});

const middlewares = applyMiddleware(thunkMiddleware, authenticationMiddleware);

export const store = createStore(reducers, middlewares);
export const history = syncHistoryWithStore(browserHistory, store)
