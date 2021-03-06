import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import '../assets/styles/Header.scss';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname;

  const formatLocation = () => {
    if (location === '/') {
      return 'Home';
    }
    if (location === '/login' || location === '/signup') {
      return 'OhMyMood!';
    }
    return location.slice(1).replace(/(^\w{1})/g, match => match.toUpperCase());
  };

  return (
    <div className="Header">
      {location === '/'
        ? <div className="back-link" />
        : (
          <Link to="/" className="back-link">
            <IoIosArrowBack />
          </Link>
        )}

      <p className="current-path">{formatLocation()}</p>
    </div>
  );
};

export default Header;
