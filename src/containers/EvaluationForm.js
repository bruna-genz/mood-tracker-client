/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MOOD_ELEMENTS_URL } from '../constants/urls';

const EvaluationForm = () => {
  const options = ['Very happy', 'Happy', 'Normal', 'Sad', 'Very sad'];
  const [moodElements, setMoodElements] = useState([]);
  const [moodInputs, setMoodInputs] = useState({});

  useEffect(() => {
    const getMoodElements = () => {
      axios.get(MOOD_ELEMENTS_URL, { withCredentials: true })
        .then(response => {
          setMoodElements(response.data.mood_elements);
        });
    };
    getMoodElements();
  }, []);

  return (
    <form>
      {moodElements.map(element => {
        const { input_type, name } = element;
        if (input_type === 'option') {
          return (
            <div className="mood-select">
              { options.map(option => (
                <div className="radio" key={option}>
                  <input
                    type="radio"
                    value={option}
                    checked={moodInputs[name] === option}
                    onChange={e => {
                      const temp = { ...moodInputs };
                      temp[name] = e.target.value;
                      setMoodInputs(temp);
                    }}
                  />
                  {option}
                </div>
              ))}
            </div>
          );
        }

        if (input_type === 'text') {
          return (
            <input
              placeholder={name}
              type="text"
              name={name}
              value={moodInputs[name]}
              onChange={e => {
                const temp = { ...moodInputs };
                temp[name] = e.target.value;
                setMoodInputs(temp);
              }}
            />
          );
        }
      })}
    </form>
  );
};

export default EvaluationForm;
