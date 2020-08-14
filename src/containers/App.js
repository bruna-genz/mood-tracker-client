import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN_STATUS_URL } from '../constants/urls';
import Home from '../components/Home';
import Login from '../components/registrations/Login';
import Signup from '../components/registrations/Signup';
import { handleLogin, handleLogout } from '../actions';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loginStatus = () => {
      axios.get(LOGIN_STATUS_URL, { withCredentials: true })
        .then(response => {
          if (response.data.logged_in) {
            dispatch(handleLogin(response.data));
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
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
