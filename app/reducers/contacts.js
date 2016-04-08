import { RECEIVE_CONTACTS, RECEIVE_CONTACT, ADD_PAGE, SET_FILTER } from '../constants/ActionTypes';

const initialState = {
  list: [],
  page: 0,
  contact: null,
  filter: {
    type: 'name',
    value: ''
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CONTACTS:
      return {
        ...state,
        list: [...state.list, ...action.payload.list]
      }

    case RECEIVE_CONTACT:
      return {
        ...state,
        contact: action.payload.contact
      }

    case SET_FILTER:
      return {
        ...initialState, // Erase current state when filtering
        filter: action.filter,
      }

    case ADD_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }

    default:
      return state;

  }
}
