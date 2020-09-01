import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { handleLogin } from '../actions/index';

const useAuthentication = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const authenticate = (URL, user, completion) => {
    axios.post(URL, { user }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created' || response.data.logged_in) {
          dispatch(handleLogin(response.data));
          completion();
        } else {
          setError(response.data.errors);
        }
      })
      .catch(error => setError(error.response.data.errors));
  };

  return [authenticate, error];
};

export default useAuthentication;
