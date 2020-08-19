import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const CurrentEvaluation = props => {
  const { evaluation } = props;
  const sortedEvaluation = _.sortBy(evaluation, ['id']);

  return (
    <div className="CurrentEvaluation">
      { sortedEvaluation.map(evaluationEl => (
        <div className="evaluation-el" key={evaluationEl.id}>
          <h3>{evaluationEl.name}</h3>
          <p>{evaluationEl.evaluation}</p>
        </div>
      ))}
    </div>
  );
};

CurrentEvaluation.propTypes = {
  evaluation: PropTypes.instanceOf(Array).isRequired,
};

export default CurrentEvaluation;
