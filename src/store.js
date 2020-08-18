import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  auth: {
    isLoggedIn: false,
    user: {},
  },
  evaluations: {
    currentEvaluation: [],
    evaluationsList: [],
  },
};

const store = createStore(
  rootReducer,
  initialState,
);

export default store;
