/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/EvaluationsList.scss';
import { IoIosArrowDown } from 'react-icons/io';

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
              return (
                <button type="button" key={e.id} onClick={() => showDetails(!details)}>
                  <p className="button-left">
                    {`${e.mood_element_name}: ${e.evaluation}`}
                  </p>
                  <div className="button-right">
                    <div className={`mood-emoji-small ${e.evaluation}`} />
                    <IoIosArrowDown />
                  </div>
                </button>
              );
            }

            if (details) {
              return (
                <div className="eval-details" key={e.id}>
                  <h5>{e.mood_element_name}</h5>
                  <p>{e.evaluation}</p>
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
