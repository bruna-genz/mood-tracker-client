import { SHOW_ERROR, DISMISS_ERROR } from '../constants/actionTypes';

const errorReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return true;
    case DISMISS_ERROR:
      return false;
    default:
      return state;
  }
};

export default errorReducer;
