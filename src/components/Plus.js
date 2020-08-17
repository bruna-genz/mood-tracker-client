import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_URL } from '../constants/urls';
import { handleLogout } from '../actions';

const Home = () => {
  const history = useHistory();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleClick = () => {
    axios.delete(LOGOUT_URL, { withCredentials: true })
      .then(() => {
        dispatch(handleLogout());
        history.push('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <Link to="/login">Log In</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
      <br />
      {
          isLoggedIn
            ? <Link to="/logout" onClick={handleClick}>Log Out</Link>
            : null
        }
    </div>
  );
};

export default Home;
