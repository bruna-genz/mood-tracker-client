import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const CurrentEvaluation = props => {
  const { evaluation } = props;
  const sortedEvaluation = _.sortBy(evaluation, ['id']);

  return (
    <div className="CurrentEvaluation">
      <div className="header">
        <h2>Hello!</h2>
        <h3>You already evaluated your mood today.</h3>
      </div>
      <div className="evaluation-cont">
        { sortedEvaluation.map(evaluationEl => {
          if (evaluationEl.name === 'Mood') {
            return <div className={`mood-emoji ${evaluationEl.evaluation}`} key={evaluationEl.id} />;
          }

          return (
            <div className="evaluation-el" key={evaluationEl.id}>
              <h4>{evaluationEl.name}</h4>
              <p>{evaluationEl.evaluation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

CurrentEvaluation.propTypes = {
  evaluation: PropTypes.instanceOf(Array).isRequired,
};

export default CurrentEvaluation;
