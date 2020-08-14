import React, { useState } from 'react';

const EvaluationForm = () => {
  const options = ['happy', 'sad', 'worried'];
  const [mood, setMood] = useState('');
  const [positive, setPositive] = useState('');
  const [negative, setNegative] = useState('');
  const [learned, setLearned] = useState('');

  return (
    <form>
      <div className="mood-select">
        { options.map(option => (
          <div className="radio" key={option}>
            <input
              type="radio"
              value={option}
              checked={mood === option}
              onChange={e => setMood(e.target.value)}
            />
            {option}
          </div>
        ))}
      </div>
      <input
        placeholder="What went well today?"
        type="positive"
        name="positive"
        value={positive}
        onChange={e => setPositive(e.target.value)}
      />
      <input
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
    </form>
  );
};

export default EvaluationForm;
