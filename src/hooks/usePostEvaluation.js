import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { EVALUATIONS_URL } from '../constants/urls';
import { addEvaluation } from '../actions';
import '../assets/styles/Form.scss';
import '../assets/styles/EvaluationForm.scss';
import useGetEvaluations from './useGetEvaluations';

const usePostEvaluation = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const getEvaluations = useGetEvaluations();

  const postEvaluation = (evaluations, completion) => {
    Promise.all(
      evaluations.map(evaluation => (
        axios.post(EVALUATIONS_URL, { evaluation }, { withCredentials: true })
          .then(response => {
            if (response.data.status === 'created') {
              dispatch(addEvaluation(response.data));
              getEvaluations();
            } else {
              throw Error('One of the evals failed');
            }
          })
      )),
    )
      .then(() => {
        setError(false);
        completion();
      })
      .catch(() => setError(true));
  };

  return [postEvaluation, error];
};

export default usePostEvaluation;
