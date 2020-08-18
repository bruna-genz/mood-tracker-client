import moment from 'moment';
import { ADD_EVALUATION, GET_EVALUATIONS } from '../constants/actionTypes';

const initialState = {
  currentEvaluation: [],
  evaluationsList: [],
};

const evaluationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVALUATION: {
      const { payload } = action;
      const evaluationData = {
        created: payload.evaluation.created_at,
        name: payload.moodElementName,
        evaluation: payload.evaluation.evaluation,
      };
      return {
        ...state,
        currentEvaluation: [...state.currentEvaluation, evaluationData],
      };
    }
    case GET_EVALUATIONS: {
      console.log(action.payload)
      const currentEvaluation = action.payload.filter(evaluation => (
        evaluation.created_at === moment().format('DD MMM YY')
      ));
      return {
        ...state,
        evaluationsList: action.payload,
        currentEvaluation,
      };
    }
    default:
      return state;
  }
};

export default evaluationsReducer;
