import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { LOGIN, LOGOUT } from '../constants/ActionTypes';

function authenticationMiddleware() {
  return next => action => {
    next(action);

    if(action.type === LOGIN || action.type === LOGOUT) {
      localStorage.setItem('authentication', JSON.stringify(action.payload.authentication));
    }

  };
}

export default applyMiddleware(thunkMiddleware, authenticationMiddleware);
