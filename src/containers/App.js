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
import '../assets/styles/App.scss';
import EvaluationForm from './EvaluationForm';

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
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/eval" component={EvaluationForm} />
        </Switch>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
