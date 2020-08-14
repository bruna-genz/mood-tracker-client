import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import '../assets/styles/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <Link to="/">
      <IoIosArrowBack />
    </Link>
  </div>
);

export default Header;
