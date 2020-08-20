/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import '../assets/styles/EvaluationsList.scss';
import { IoIosArrowDown } from 'react-icons/io';

const EvaluationsList = () => {
  const evaluationsList = useSelector(state => state.evaluations.evaluationsList);
  const evaluationsArray = Object.entries(_.mapValues(_.groupBy(evaluationsList, 'created_at')));
  const [details, showDetails] = useState('');

  const moodDict = {
    'Very-happy': 'Very happy',
    Happy: 'Happy',
    Normal: 'Normal',
    Sad: 'Sad',
    'Very-sad': 'Very sad',
  };

  return (
    <ul className="EvaluationsList">
      { evaluationsArray.length === 0
        ? <p className="eval-message">You don&apos;t have evaluations yet.</p>
        : evaluationsArray.map(evaluations => (
          <li key={evaluations[0]}>
            <h4>{evaluations[0]}</h4>
            {evaluations[1].map(e => {
              const date = evaluations[0];
              if (e.mood_element_id === 1) {
                return (
                  <button
                    type="button"
                    key={e.id}
                    onClick={() => {
                      const detail = details === date ? '' : date;
                      showDetails(detail);
                    }}
                  >
                    <p className="button-left">
                      {`${e.mood_element_name}: ${moodDict[e.evaluation]}`}
                    </p>
                    <div className="button-right">
                      <div className={`mood-emoji-small ${e.evaluation}`} />
                      <IoIosArrowDown />
                    </div>
                  </button>
                );
              }

              if (details === date) {
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

export default EvaluationsList;
