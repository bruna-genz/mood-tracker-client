import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT_URL } from '../constants/urls';
import { handleLogout } from '../actions';

const useLogout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    axios.delete(LOGOUT_URL, { withCredentials: true })
      .then(() => {
        dispatch(handleLogout());
        history.push('/');
      })
      .catch(error => console.log(error));
  };

  return { logout };
};

export default useLogout;
