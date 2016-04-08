import { LOGIN, LOGOUT } from '../constants/ActionTypes';


const initialState = {
  authentication: {
    username: '',
    email: ''
  },
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        authentication: action.payload.authentication,
      };

    case LOGOUT:
      return {
        ...state,
        authentication: action.payload.authentication,
      };

    default:
      return state;

  }
}
