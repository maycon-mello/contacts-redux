import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import contacts from './contacts';
import login from './login';


export default combineReducers({
  contacts,
  login,
  routing: routerReducer,
});
