import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import EvaluationsList from './EvaluationsList';

const EvaluationsContainer = () => {
  const evaluationsList = useSelector(state => state.evaluations.evaluationsList);
  const groupedEvaluationsList = Object.entries(_.mapValues(_.groupBy(evaluationsList, 'created_at')));

  return (
    <EvaluationsList evaluationsArray={groupedEvaluationsList} />
  );
};

export default EvaluationsContainer;
