import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    !isLoggedIn
      ? <Redirect to="/login" />
      : (
        <div>
          <h1>Welcome back!</h1>
          <h2>Let&apos;s add your mood for today.</h2>
          <div>
            <Link to="/eval">Add</Link>
          </div>
        </div>
      )

  );
};

export default Home;
