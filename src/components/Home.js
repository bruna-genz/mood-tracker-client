import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import CurrentEvaluation from './CurrentEvaluation';

const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const currentEvaluation = useSelector(state => state.evaluations.currentEvaluation);
  const loading = useSelector(state => state.loading);

  if (loading) {
    return <p>loading</p>;
  }

  console.log(loading)
  console.log(isLoggedIn)
  console.log(currentEvaluation)

  return (
    !isLoggedIn
      ? <Redirect to="/login" />
      : (
        <div>
          { !_.isEmpty(currentEvaluation) ? <CurrentEvaluation evaluation={currentEvaluation} />
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
