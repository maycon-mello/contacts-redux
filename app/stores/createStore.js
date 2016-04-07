import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authenticationMiddleware } from './middleware';

export default reducer => createStore(reducer, applyMiddleware(thunkMiddleware, authenticationMiddleware))
