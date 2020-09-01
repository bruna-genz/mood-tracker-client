import axios from 'axios';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { EVALUATIONS_URL } from '../constants/urls';
import {
  getEvaluations, showError, dismissError, startLoading, stopLoading,
} from '../actions/index';

const formatDate = json => json.map(el => ({
  ...el,
  created_at: moment(el.created_at).format('DD MMM YY'),
}));

const useGetEvaluations = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.id);
  const url = `${EVALUATIONS_URL}/${userId}`;

  const getList = () => {
    dispatch(startLoading());
    axios.get(url, { withCredentials: true })
      .then(response => {
        if (response.data.evaluations) {
          const formatedData = formatDate(response.data.evaluations);
          dispatch(getEvaluations(formatedData));
        }
        dispatch(dismissError());
        dispatch(stopLoading());
      })
      .catch(() => {
        dispatch(showError());
        dispatch(stopLoading());
      });
  };

  return getList;
};

export default useGetEvaluations;
