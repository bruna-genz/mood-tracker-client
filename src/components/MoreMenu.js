import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { FaUserCircle } from 'react-icons/fa';
import { Redirect } from 'react-router';

const MoreMenu = ({ logout }) => {
  const user = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    isLoggedIn
      ? (
        <div className="MoreMenu">
          <p>
            <FaUserCircle />
            {user.username}
          </p>
          <p>{`Member since:  ${moment(user.created_at).format('LL')}` }</p>
          <button type="button" onClick={logout}>Logout</button>
        </div>
      )
      : <Redirect to="/login" />
  );
};

export default MoreMenu;
