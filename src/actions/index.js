import { HANDLE_LOGIN, HANDLE_LOGOUT, ADD_MOOD } from '../constants/actionTypes';

export const handleLogin = user => ({
  type: HANDLE_LOGIN,
  payload: user,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const addMood = mood => ({
  type: ADD_MOOD,
  payload: mood,
});
