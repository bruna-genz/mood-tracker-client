import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SIGNUP_URL, LOGIN_URL } from '../constants';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password_confirmation: '', //! ONLY SIGNUP
      errors: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      username, password, password_confirmation,
    } = this.state;

    const user = {
      username,
      password,
      password_confirmation,
    };

    const URL = this.props.type === 'signup' ? SIGNUP_URL : LOGIN_URL;

    axios.post(URL, { user }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created' || response.data.logged_in) {
          this.props.handleLogin(response.data);
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch(error => console.log('api errors:', error));
  }

  redirect() {
    this.props.history.push('/');
  }

  handleErrors() {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => <li key={error}>{error}</li>)}
        </ul>
      </div>
    );
  }

  render() {
    const {
      username, password, password_confirmation,
    } = this.state;

    return (
      <div>
        <h1>{ this.props.type === 'signup' ? 'Sign Up' : 'Log In'}</h1>
        {' '}
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          {' '}
          { this.props.type === 'signup'
            && (
              <input
                placeholder="password confirmation"
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={this.handleChange}
              />
            )}

          <button placeholder="submit" type="submit">
            { this.props.type === 'signup' ? 'Sign Up' : 'Log In' }
          </button>
          { this.props.type === 'login'
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
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}

export default Form;
