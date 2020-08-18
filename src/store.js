import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  loading: true,
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
