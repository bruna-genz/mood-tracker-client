import React from 'react';
import { AiFillPieChart, AiOutlineLineChart, AiFillHome } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import '../assets/styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="Navbar">
    <div className="add-link"><Link to="/"><AiFillHome /></Link></div>
    <div className="track-link"><Link to="/track.it"><AiOutlineLineChart /></Link></div>
    <div className="progress-link"><AiFillPieChart /></div>
    <div className="more-link"><Link to="/menu"><FiMoreHorizontal /></Link></div>
  </nav>
);

export default Navbar;
