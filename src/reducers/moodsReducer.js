import { ADD_MOOD, GET_MOODS } from '../constants/actionTypes';

const initialState = {
  currentMood: [],
  moodsList: [],
};

const moodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOOD: {
      const { payload } = action;
      const moodData = {
        created: payload.evaluation.created_at,
        name: payload.moodElementName,
        evaluation: payload.evaluation.evaluation,
      };
      return {
        ...state,
        currentMood: [...state.currentMood, moodData],
      };
    }
    case GET_MOODS:
      return {
        ...state,
        moodsList: action.payload,
      };
    default:
      return state;
  }
};

export default moodsReducer;
