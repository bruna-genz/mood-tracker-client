import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT_URL } from '../constants/urls';
import { handleLogout, cleanEvaluations, showError } from '../actions';

const useLogout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    axios.delete(LOGOUT_URL, { withCredentials: true })
      .then(() => {
        dispatch(handleLogout());
        dispatch(cleanEvaluations());
        history.push('/');
      })
      .catch(() => dispatch(showError()));
  };

  return { logout };
};

export default useLogout;
