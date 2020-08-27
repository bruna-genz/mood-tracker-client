import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SIGNUP_URL, LOGIN_URL } from '../../constants/urls';
import '../../assets/styles/Form.scss';
import useAuthentication from '../../hooks/useAuthentication';

const Form = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const history = useHistory();
  const { type } = props;
  const [authenticate, errors] = useAuthentication();

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

    authenticate(URL, user, redirect);
  };

  const handleErrors = () => (
    <ul className="errors-list">
      {errors.map(error => <li key={error}>{error}</li>)}
    </ul>
  );

  return (
    <div className="form-container">
      <form className="Form" onSubmit={handleSubmit}>
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

        <button className="green-button" placeholder="submit" type="submit">
          { type === 'signup' ? 'Sign Up' : 'Log In' }
        </button>
        { type === 'login'
            && (
              <div className="signup-link">
                or
                {' '}
                <Link to="/signup">Sign up</Link>
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
