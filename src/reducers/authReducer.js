import { HANDLE_LOGIN, HANDLE_LOGOUT } from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case HANDLE_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
