import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Home from './Home';
import Login from './registrations/Login';
import Signup from './registrations/Signup';
import Navbar from './Navbar';
import Header from './Header';
import '../assets/styles/App.scss';
import EvaluationForm from './EvaluationForm';
import EvaluationsList from './EvaluationsList';
import MoreMenu from './MoreMenu';
import useGetEvaluations from '../hooks/useGetEvaluations';
import Error from './Error';
import useLoginStatus from '../hooks/useLoginStatus';

const App = () => {
  const getEvaluations = useGetEvaluations();
  const currentEvaluation = useSelector(state => state.evaluations.currentEvaluation);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const error = useSelector(state => state.error);
  const loginStatus = useLoginStatus();

  useEffect(() => {
    loginStatus();
  });

  useEffect(() => {
    if (isLoggedIn && _.isEmpty(currentEvaluation)) {
      getEvaluations();
    }
  }, [isLoggedIn]); // eslint-disable-line

  if (error) {
    return <Error />;
  }

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
          <Route path="/error" component={Error} />
        </Switch>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
