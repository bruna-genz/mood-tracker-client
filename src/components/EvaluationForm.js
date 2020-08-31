/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router';
import { MOOD_ELEMENTS_URL } from '../constants/urls';
import '../assets/styles/Form.scss';
import '../assets/styles/EvaluationForm.scss';
import usePostEvaluation from '../hooks/usePostEvaluation';

const EvaluationForm = () => {
  const options = ['Very-happy', 'Happy', 'Normal', 'Sad', 'Very-sad'];
  const [moodElements, setMoodElements] = useState([]);
  const [evaluations, setEvaluations] = useState({});
  const currentEvaluation = useSelector(state => state.evaluations.currentEvaluation);
  const currentUser = useSelector(state => state.auth.user.id);
  const history = useHistory();
  const [postEvaluation, error] = usePostEvaluation();

  useEffect(() => {
    const getMoodElements = () => {
      axios.get(MOOD_ELEMENTS_URL, { withCredentials: true })
        .then(response => {
          setMoodElements(response.data.mood_elements);
        });
    };
    getMoodElements();
  }, []);

  const redirect = () => {
    history.push('/');
  };

  const handleSubmitEvaluation = e => {
    e.preventDefault();
    const evaluationsArray = Object.entries(evaluations);

    const evs = evaluationsArray.map(curEval => (
      {
        user_id: currentUser,
        evaluation: curEval[1],
        mood_element_id: curEval[0],
      }
    ));

    postEvaluation(evs, redirect);
  };

  if (error) {
    return <Redirect to="/error" />;
  }

  return (
    !_.isEmpty(currentEvaluation)
      ? <Redirect to="/" />
      : (
        <div className="EvaluationForm form-container">
          <h3>Add your mood evaluation:</h3>
          <form className="Form">
            {moodElements.map(element => {
              const { input_type, id, name } = element;
              if (input_type === 'options') {
                return (
                  <div className="mood-select" key={id}>
                    { options.map(option => (
                      <div className="radio" key={option}>
                        <input
                          type="radio"
                          id={option}
                          value={option}
                          checked={evaluations[id] === option}
                          onChange={e => {
                            const temp = { ...evaluations };
                            temp[id] = e.target.value;
                            setEvaluations(temp);
                          }}
                        />
                        <label htmlFor={option} className={`${option} mood-emoji-small`} />
                      </div>
                    ))}
                  </div>
                );
              }

              if (input_type === 'text') {
                return (
                  <input
                    className="mood-extras"
                    key={id}
                    placeholder={name}
                    type="text"
                    name={id}
                    value={evaluations[id]}
                    onChange={e => {
                      const temp = { ...evaluations };
                      temp[id] = e.target.value;
                      setEvaluations(temp);
                    }}
                  />
                );
              }
            })}

            <input className="green-button" type="submit" value="Add" onClick={e => handleSubmitEvaluation(e)} />
          </form>
        </div>
      )
  );
};

export default EvaluationForm;
