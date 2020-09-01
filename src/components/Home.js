import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import CurrentEvaluation from './CurrentEvaluation';
import '../assets/styles/Home.scss';

const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const currentEvaluation = useSelector(state => state.evaluations.currentEvaluation);
  const loading = useSelector(state => state.loading);

  if (loading) {
    return (
      <div className="Home">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    !isLoggedIn
      ? <Redirect to="/login" />
      : (
        <div className="Home">
          { !_.isEmpty(currentEvaluation) ? <CurrentEvaluation evaluation={currentEvaluation} />
            : (
              <div className="welcome-box">
                <div className="header">
                  <h2>Welcome back!</h2>
                  <h3>Let&apos;s add your mood for today.</h3>
                </div>
                <Link className="add-eval-btn" to="/eval">Add</Link>
              </div>
            )}
        </div>
      )
  );
};

export default Home;
