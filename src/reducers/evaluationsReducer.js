import moment from 'moment';
import { ADD_EVALUATION, GET_EVALUATIONS, CLEAN_EVALUATIONS } from '../constants/actionTypes';

const initialState = {
  currentEvaluation: [],
  evaluationsList: [],
};

const formatData = dataObject => ({
  id: dataObject.id,
  created: dataObject.created_at,
  name: dataObject.mood_element_name,
  evaluation: dataObject.evaluation,
});

const evaluationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVALUATION: {
      const { payload } = action;
      const evaluationData = formatData(payload.evaluation);
      return {
        ...state,
        currentEvaluation: [...state.currentEvaluation, evaluationData],
      };
    }
    case GET_EVALUATIONS: {
      const currentEvaluation = action.payload.filter(evaluation => (
        evaluation.created_at === moment().format('DD MMM YY')
      )).map(curEval => formatData(curEval));
      return {
        ...state,
        evaluationsList: action.payload,
        currentEvaluation,
      };
    }
    case CLEAN_EVALUATIONS:
      return {
        ...state,
        currentEvaluation: [],
        evaluationsList: [],
      };
    default:
      return state;
  }
};

export default evaluationsReducer;
