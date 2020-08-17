import { combineReducers } from 'redux';
import authReducer from './authReducer';
import moodsReducer from './moodsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  moods: moodsReducer,
});

export default rootReducer;
