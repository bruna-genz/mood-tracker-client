import axios from 'axios';
import { useDispatch } from 'react-redux';
import { LOGIN_STATUS_URL } from '../constants/urls';
import {
  startLoading,
  stopLoading,
  handleLogin,
  handleLogout,
  //showError,
  dismissError,
} from '../actions/index';

const useLoginStatus = () => {
  const dispatch = useDispatch();

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
        dispatch(dismissError());
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  };

  return loginStatus;
};

export default useLoginStatus;
