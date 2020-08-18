import { combineReducers } from 'redux';
import authReducer from './authReducer';
import evaluationsReducer from './evaluationsReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  evaluations: evaluationsReducer,
});

export default rootReducer;
