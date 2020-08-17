import React, { useEffect } from 'react';
import axios from 'axios';
import lodash from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { EVALUATIONS_URL } from '../constants/urls';
import { getMoods } from '../actions/index';

const MoodsList = () => {
  const moodsList = useSelector(state => state.moods.moodsList);
  const dispatch = useDispatch();

  useEffect(() => {
    const getList = () => {
      axios.get(EVALUATIONS_URL, { withCredentials: true })
        .then(response => {
          if (response.data.evaluations) {
            dispatch(getMoods(response.data.evaluations));
          }
        })
        .catch(error => console.log('api errors:', error));
    };
    getList();
  }, [dispatch]);

  const group = lodash.groupBy(moodsList, 'created_at');

  console.log(moodsList);
  console.log(group)

  return (
    <div className="MoodsList">
      moods
    </div>
  );
};

export default MoodsList;
