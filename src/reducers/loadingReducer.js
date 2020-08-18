import { START_LOADING, STOP_LOADING } from '../constants/actionTypes';

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case START_LOADING:
      console.log('reducer loading')
      return true;
    case STOP_LOADING:
      console.log('reducer stop loading')
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
