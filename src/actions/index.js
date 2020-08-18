import {
  HANDLE_LOGIN, HANDLE_LOGOUT, ADD_EVALUATION, GET_EVALUATIONS, START_LOADING, STOP_LOADING
} from '../constants/actionTypes';

export const handleLogin = user => ({
  type: HANDLE_LOGIN,
  payload: user,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const addEvaluation = evaluation => ({
  type: ADD_EVALUATION,
  payload: evaluation,
});

export const getEvaluations = evaluations => ({
  type: GET_EVALUATIONS,
  payload: evaluations,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});
