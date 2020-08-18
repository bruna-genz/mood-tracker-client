import React, { useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { EVALUATIONS_URL } from '../constants/urls';
import { getMoods } from '../actions/index';

const MoodsList = () => {
  const moodsList = useSelector(state => state.moods.moodsList);
  const dispatch = useDispatch();
  const groupedMoodsList = Object.entries(_.mapValues(_.groupBy(moodsList, 'created_at')));

  const formatDate = json => json.map(el => ({
    ...el,
    created_at: moment(el.created_at).format('DD MMM YY'),
  }));

  useEffect(() => {
    const getList = () => {
      axios.get(EVALUATIONS_URL, { withCredentials: true })
        .then(response => {
          if (response.data.evaluations) {
            const formatedData = formatDate(response.data.evaluations);
            dispatch(getMoods(formatedData));
          }
        })
        .catch(error => console.log('api errors:', error));
    };
    getList();
  }, [dispatch]);

  return (
    <ul className="MoodsList">
      { groupedMoodsList.map(moodArray => (
        <li key={moodArray[0]}>
          <h4>{moodArray[0]}</h4>
          {moodArray[1].map(evaluation => {
            return <p key={evaluation.id}>{evaluation.evaluation}</p>
          })}
        </li>
      ))}
    </ul>
  );
};

export default MoodsList;
