import { createReducer } from '@reduxjs/toolkit';
// import { HANDLE_LOGIN, HANDLE_LOGOUT } from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
  user: {},
};

const authReducer = createReducer(initialState, {
  HANDLE_LOGIN: (state, action) => ({
    ...state,
    isLoggedIn: true,
    user: action.payload,
  }),
  HANDLE_LOGOUT: state => ({
    ...state,
    isLoggedIn: false,
    user: {},
  }),
});

export default authReducer;
