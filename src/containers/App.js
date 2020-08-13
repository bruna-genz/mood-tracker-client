import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_STATUS_URL } from '../constants/urls';
import Home from '../components/Home';
import Login from '../components/registrations/Login';
import Signup from '../components/registrations/Signup';
import { handleLogin, handleLogout } from '../actions/index';

const App = () => {
  // const [isLoggedIn, setLoginStatus] = useState(false);
  // const [user, setUser] = useState({});

  // const handleLogin = data => {
  //   setLoginStatus(true);
  //   setUser(data.user);
  // };

  // const handleLogout = () => {
  //   setLoginStatus(false);
  //   setUser({});
  // };

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const loginStatus = () => {
      axios.get(LOGIN_STATUS_URL, { withCredentials: true })
        .then(response => {
          if (response.data.logged_in) {
            dispatch(handleLogin(response));
          } else {
            dispatch(handleLogout());
          }
        })
        .catch(error => console.log('api errors:', error));
    };
    loginStatus();
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home handleLogout={handleLogout} loggedInStatus={isLoggedIn} />
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <Login handleLogin={handleLogin} loggedInStatus={isLoggedIn} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <Signup handleLogin={handleLogin} loggedInStatus={isLoggedIn} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
