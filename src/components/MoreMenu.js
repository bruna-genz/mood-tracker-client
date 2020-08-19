import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { FaUserCircle } from 'react-icons/fa';
import { Redirect } from 'react-router';
import useLogout from '../hooks/useLogout';
import '../assets/styles/MoreMenu.scss';

const MoreMenu = () => {
  const user = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { logout } = useLogout();

  return (
    isLoggedIn
      ? (
        <div className="MoreMenu">
          <div className="user">
            <FaUserCircle />
            <h3>{user.username}</h3>
          </div>
          <p>{`Member since:  ${moment(user.created_at).format('LL')}` }</p>
          <button className="green-button" type="button" onClick={logout}>Logout</button>
        </div>
      )
      : <Redirect to="/login" />
  );
};

export default MoreMenu;
