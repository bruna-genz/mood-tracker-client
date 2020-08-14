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

    setMoodInputs(() => {
      // eslint-disable-next-line no-return-assign
      moodElements.forEach(element => moodInputs[element] = '');
    });
  }, []);

  return (
    <form>
      {moodElements.map(element => {
        if (element.type === 'option') {
          return (
            <div className="mood-select">
              { options.map(option => (
                <div className="radio" key={option}>
                  <input
                    type="radio"
                    value={moodInputs[element]}
                    checked={moodInputs[element] === element}
                    onChange={e => setMoodInputs({ ...moodInputs, element: e.target.value })}
                  />
                  {option}
                </div>
              ))}
            </div>
          );
        }

        if (element.type === 'text') {
          return (
            <input
              placeholder={element.name}
              type="text"
              name={element.ref}
              value={moodInputs[element]}
              onChange={e => setMoodInputs({ ...moodInputs, element: e.target.value })}
            />
          );
        }
      })}

      {/* <input
        placeholder="What went badly today?"
        type="negative"
        name="negative"
        value={negative}
        onChange={e => setNegative(e.target.value)}
      />
      <input
        placeholder="What did you learned?"
        type="learned"
        name="learned"
        value={learned}
        onChange={e => setLearned(e.target.value)}
      />
      <input type="submit" value="Add" /> */}
    </form>
  );
};

export default EvaluationForm;
