import React from 'react';
import PropTypes from 'prop-types';

const CurrentMood = props => {
  const { mood } = props;

  return (
    <div className="CurrentMood">
      { mood.map(moodEl => (
        <div className="mood-el" key={moodEl.name}>
          <h3>{moodEl.name}</h3>
          <p>{moodEl.evaluation}</p>
        </div>
      ))}
    </div>
  );
};

CurrentMood.propTypes = {
  mood: PropTypes.instanceOf(Array).isRequired,
};

export default CurrentMood;
