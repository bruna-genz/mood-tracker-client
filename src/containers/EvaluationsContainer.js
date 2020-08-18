import React, { useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { EVALUATIONS_URL } from '../constants/urls';
import { getEvaluations } from '../actions/index';
import EvaluationsList from '../components/EvaluationsList';

const EvaluationsContainer = () => {
  const evaluationsList = useSelector(state => state.evaluations.evaluationsList);
  const dispatch = useDispatch();
  const groupedEvaluationsList = Object.entries(_.mapValues(_.groupBy(evaluationsList, 'created_at')));

  const formatDate = json => json.map(el => ({
    ...el,
    created_at: moment(el.created_at).format('DD MMM YY'),
  }));

  useEffect(() => {
    const getList = () => {
      axios.get(EVALUATIONS_URL, { withCredentials: true })
        .then(response => {
          if (response.data.evaluations) {
            const formatedData = formatDate(response.data.evaluations);
            dispatch(getEvaluations(formatedData));
          }
        })
        .catch(error => console.log('api errors:', error));
    };
    getList();
  }, [dispatch]);

  return (
    <EvaluationsList evaluationsArray={groupedEvaluationsList} />
  );
};

export default EvaluationsContainer;
