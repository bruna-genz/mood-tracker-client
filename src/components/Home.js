import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Home = (props) => {
  const history = useHistory();

  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(response => {
        props.handleLogout();
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
          props.loggedInStatus
            ? <Link to="/logout" onClick={handleClick}>Log Out</Link>
            : null
        }
    </div>
  );
};

export default Home;
