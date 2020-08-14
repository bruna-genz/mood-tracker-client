import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { AiFillPieChart, AiOutlineLineChart } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import '../assets/styles/Navbar.scss';

const Navbar = () => (
  <nav className="Navbar">
    <div className="add-link"><FaPlusCircle /></div>
    <div className="track-link"><AiOutlineLineChart /></div>
    <div className="progress-link"><AiFillPieChart /></div>
    <div className="more-link"><FiMoreHorizontal /></div>
  </nav>
);

export default Navbar;
