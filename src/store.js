import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  auth: {
    isLoggedIn: false,
    user: {},
  },
  moods: {
    currentMood: {},
    moodsList: [],
  },
};

const store = createStore(
  rootReducer,
  initialState,
);

export default store;
