import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { LOGIN_STATUS_URL } from '../constants/urls';
import Home from './Home';
import Login from './registrations/Login';
import Signup from './registrations/Signup';
import {
  handleLogin, handleLogout, startLoading, stopLoading,
} from '../actions';
import Navbar from './Navbar';
import Header from './Header';
import '../assets/styles/App.scss';
import EvaluationForm from './EvaluationForm';
import EvaluationsList from './EvaluationsList';
import MoreMenu from './MoreMenu';
import useGetEvaluations from '../hooks/useGetEvaluations';

const App = () => {
  const dispatch = useDispatch();
  const getEvaluations = useGetEvaluations();
  const currentEvaluation = useSelector(state => state.evaluations.currentEvaluation);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    const loginStatus = () => {
      dispatch(startLoading());
      axios.get(LOGIN_STATUS_URL, { withCredentials: true })
        .then(response => {
          if (response.data.logged_in) {
            dispatch(handleLogin(response.data));
          } else {
            dispatch(handleLogout());
          }
          dispatch(stopLoading());
        })
        .catch(error => console.log('api errors:', error));
    };
    loginStatus();
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn && _.isEmpty(currentEvaluation)) {
      getEvaluations();
    }
  }, [isLoggedIn]); // eslint-disable-line

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/eval" component={EvaluationForm} />
          <Route path="/track.it" component={EvaluationsList} />
          <Route path="/menu" component={MoreMenu} />
        </Switch>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
