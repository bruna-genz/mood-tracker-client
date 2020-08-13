import { HANDLE_LOGIN, HANDLE_LOGOUT } from '../constants/actionTypes';

export const handleLogin = user => ({
  type: HANDLE_LOGIN,
  payload: user,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});
