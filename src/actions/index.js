import { createAction } from '@reduxjs/toolkit';
// import { HANDLE_LOGIN, HANDLE_LOGOUT } from '../constants/actionTypes';

export const handleLogin = createAction('HANDLE_LOGIN');
export const handleLogout = createAction('HANDLE_LOGOUT');
