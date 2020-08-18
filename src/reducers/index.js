import { combineReducers } from 'redux';
import authReducer from './authReducer';
import evaluationsReducer from './evaluationsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  evaluations: evaluationsReducer,
});

export default rootReducer;
