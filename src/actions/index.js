import {
  HANDLE_LOGIN, HANDLE_LOGOUT, ADD_MOOD, GET_MOODS,
} from '../constants/actionTypes';

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

export const getMoods = moods => ({
  type: GET_MOODS,
  payload: moods,
});
