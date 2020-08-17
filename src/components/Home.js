import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import CurrentMood from './CurrentMood';

const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const currentMood = useSelector(state => state.moods.currentMood);

  return (
    !isLoggedIn
      ? <Redirect to="/login" />
      : (
        <div>
          { !_.isEmpty(currentMood) ? <CurrentMood mood={currentMood} />
            : (
              <div>
                <h1>Welcome back!</h1>
                <h2>Let&apos;s add your mood for today.</h2>
                <div>
                  <Link to="/eval">Add</Link>
                </div>
              </div>
            )}
        </div>
      )

  );
};

export default Home;
