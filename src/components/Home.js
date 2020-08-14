import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    !isLoggedIn ? <Redirect to="/login" /> : <p>This is home</p>
  );
};

export default Home;
