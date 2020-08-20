/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router';
import { MOOD_ELEMENTS_URL, EVALUATIONS_URL } from '../constants/urls';
import { addEvaluation } from '../actions';
import '../assets/styles/Form.scss';

const EvaluationForm = () => {
  const options = ['Very-happy', 'Happy', 'Normal', 'Sad', 'Very-sad'];
  const [moodElements, setMoodElements] = useState([]);
  const [evaluations, setEvaluations] = useState({});
  const [errors, setErrors] = useState();
  const currentEvaluation = useSelector(state => state.evaluations.currentEvaluation);
  const dispatch = useDispatch();
  const history = useHistory();

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

    let evaluation;
    evaluationsArray.forEach(curEval => {
      evaluation = {
        evaluation: curEval[1],
        mood_element_id: curEval[0],
      };

      axios.post(EVALUATIONS_URL, { evaluation }, { withCredentials: true })
        .then(response => {
          if (response.data.status === 'created') {
            dispatch(addEvaluation(response.data));
            redirect();
          } else {
            setErrors(response.data.errors);
          }
        })
        .catch(error => console.log('api errors:', error));
    });
  };

  const handleErrors = () => (
    <div>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
    </div>
  );

  return (
    !_.isEmpty(currentEvaluation)
      ? <Redirect to="/" />
      : (
        <div className="EvaluationForm form-container">
          <h3>Add your mood evaluation:</h3>
          <form className="Form">
            {moodElements.map(element => {
              const { input_type, id, name } = element;
              if (input_type === 'option') {
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
                        <label for={option} className={`${option} mood-emoji-small`} />
                      </div>
                    ))}
                  </div>
                );
              }

              if (input_type === 'text') {
                return (
                  <input
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

          <div>
            { errors ? handleErrors() : null }
          </div>
        </div>
      )
  );
};

export default EvaluationForm;
