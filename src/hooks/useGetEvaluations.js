import axios from 'axios';
import moment from 'moment';
import { useDispatch } from 'react-redux';
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

  const getList = () => {
    dispatch(startLoading());
    axios.get(EVALUATIONS_URL, { withCredentials: true })
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
