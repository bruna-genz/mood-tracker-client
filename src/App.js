import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/registrations/Login';
import Signup from './components/registrations/Signup';

const App = () => {
  const [isLoggedIn, setLoginStatus] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({});

  const handleLogin = data => {
    setLoginStatus(true);
    setUser(data.user);
  };

  const handleLogout = () => {
    setLoginStatus(false);
    setUser({});
  };

  useEffect(() => {
    const loginStatus = () => {
      axios.get('http://localhost:3001/logged_in',
        { withCredentials: true }).then(response => {
        if (response.data.logged_in) {
          handleLogin(response);
        } else {
          handleLogout();
        }
      })
        .catch(error => console.log('api errors:', error));
    };
    loginStatus();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} handleLogout={handleLogout} loggedInStatus={isLoggedIn} />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} handleLogin={handleLogin} loggedInStatus={isLoggedIn} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <Signup {...props} handleLogin={handleLogin} loggedInStatus={isLoggedIn} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
