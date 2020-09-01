import { combineReducers } from 'redux';
import authReducer from './authReducer';
import evaluationsReducer from './evaluationsReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  auth: authReducer,
  evaluations: evaluationsReducer,
});

export default rootReducer;
