import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router';
import useGetEvaluations from '../hooks/useGetEvaluations';

const Loading = () => {
  const currentEvaluation = useSelector(state => state.evaluations.currentEvaluation);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoading = useSelector(state => state.loading);
  const getEvaluations = useGetEvaluations();

  useEffect(() => {
    if (isLoggedIn && _.isEmpty(currentEvaluation)) {
      getEvaluations();
    }
  });

  return (
    isLoading
      ? <p>Loading</p>
      : <Redirect to="/home" />
  );
};

export default Loading;
