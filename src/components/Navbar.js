import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { AiFillPieChart, AiOutlineLineChart } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import '../assets/styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="Navbar">
    <div className="add-link"><FaPlusCircle /></div>
    <div className="track-link"><Link to="/trackit"><AiOutlineLineChart /></Link></div>
    <div className="progress-link"><AiFillPieChart /></div>
    <div className="more-link"><Link to="/menu"><FiMoreHorizontal /></Link></div>
  </nav>
);

export default Navbar;
