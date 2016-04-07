import { RECEIVE_CONTACTS, ADD_PAGE, LOAD_MORE } from '../actions/contacts';
import { LOGIN, LOGOUT } from '../actions/authentication';

export default rootReducer;

const initialState = {
  contactList: [],
  page: 0,
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_CONTACTS:
      return {
        ...state,
        contactList: [...state.contactList, ...action.payload.contactList]
      }
    case ADD_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    case LOGIN:
      return Object.assign({}, state, { authentication: action.payload.authentication });
    case LOGOUT:
      return Object.assign({}, state, { tasks: action.payload.tasks, authentication: action.payload.authentication });
    default:
      return state;
  }

  return state;
}
