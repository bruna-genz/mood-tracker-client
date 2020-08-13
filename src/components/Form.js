import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SIGNUP_URL, LOGIN_URL } from '../constants/urls';
import { handleLogin } from '../actions';

const Form = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { type } = props;

  // componentWillMount() {
  //   return this.props.loggedInStatus ? this.redirect() : null;
  // }

  const redirect = () => {
    history.push('/');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      username,
      password,
      passwordConfirmation,
    };

    const URL = type === 'signup' ? SIGNUP_URL : LOGIN_URL;

    axios.post(URL, { user }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created' || response.data.logged_in) {
          dispatch(handleLogin(response.data));
          redirect();
        } else {
          setErrors(response.data.errors);
        }
      })
      .catch(error => console.log('api errors:', error));
  };

  const handleErrors = () => (
    <div>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
    </div>
  );

  return (
    <div>
      <h1>{ type === 'signup' ? 'Sign Up' : 'Log In'}</h1>
      {' '}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {' '}
        { type === 'signup'
          && (
            <input
              placeholder="password confirmation"
              type="password"
              name="password_confirmation"
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
          )}

        <button placeholder="submit" type="submit">
          { type === 'signup' ? 'Sign Up' : 'Log In' }
        </button>
        { type === 'login'
          && (
            <div>
              or
              {' '}
              <Link to="/signup">sign up</Link>
            </div>
          )}
      </form>

      <div>
        {
          errors ? handleErrors() : null
        }
      </div>
    </div>
  );
};

Form.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Form;
