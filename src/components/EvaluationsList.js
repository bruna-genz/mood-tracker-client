import React from 'react';
import PropTypes from 'prop-types';

const EvaluationsList = props => {
  const { evaluationsArray } = props;
  return (
    <ul className="EvaluationsList">
      { evaluationsArray.map(evaluations => (
        <li key={evaluations[0]}>
          <h4>{evaluations[0]}</h4>
          {evaluations[1].filter(evaluation => evaluation.mood_element_id === 1).map(e => (
            <p key={e.id}>{e.evaluation}</p>
          ))}
        </li>
      ))}
    </ul>
  );
};

EvaluationsList.propTypes = {
  evaluationsArray: PropTypes.instanceOf(Array).isRequired,
};

export default EvaluationsList;
