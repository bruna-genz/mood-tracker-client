import { ADD_MOOD } from '../constants/actionTypes';

const initialState = {
  currentMood: {},
  moodsList: [],
};

const moodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOOD:
      return {
        ...state,
        currentMood: action.payload,
      };
    default:
      return state;
  }
};

export default moodsReducer;
