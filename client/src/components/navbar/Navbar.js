import React from 'react'
import { FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <p className="logo"></p>
            <p className="name"><Link to="/"><FaHandsHelping style={{ color: "cyan", padding: "5px" }} /> FrontHelp</Link></p>
            <p className="reflection">FrontHelp</p>
        </div>
    );
};

export default Navbar;