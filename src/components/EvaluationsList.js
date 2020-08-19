/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EvaluationsList = props => {
  const { evaluationsArray } = props;
  const [details, showDetails] = useState(false);

  return (
    <ul className="EvaluationsList">
      { evaluationsArray.map(evaluations => (
        <li key={evaluations[0]}>
          <h4>{evaluations[0]}</h4>
          {evaluations[1].map(e => {
            if (e.mood_element_id === 1) {
              return <button type="button" key={e.id} onClick={() => showDetails(!details)}>{e.evaluation}</button>;
            }

            if (details) {
              return (
                <div className="eval-details" key={e.id}>
                  <p>
                    {e.mood_element_name}
                    {e.evaluation}
                  </p>
                </div>
              );
            }
          })}
        </li>
      ))}
    </ul>
  );
};

EvaluationsList.propTypes = {
  evaluationsArray: PropTypes.instanceOf(Array).isRequired,
};

export default EvaluationsList;
