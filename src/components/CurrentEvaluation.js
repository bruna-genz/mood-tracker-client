import React from 'react';
import PropTypes from 'prop-types';

const CurrentEvaluation = props => {
  const { evaluation } = props;

  return (
    <div className="CurrentEvaluation">
      { evaluation.map(evaluationEl => (
        <div className="evaluation-el" key={evaluationEl.name}>
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
