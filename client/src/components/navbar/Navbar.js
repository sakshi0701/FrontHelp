import React from 'react'
import { FaReact } from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <p className="logo"></p>
            <p className="name"><FaReact style={{color: "cyan", padding: "5px"}} /> ReactHelp</p>
            <p className="reflection">ReactHelp</p>
        </div>
    )
}

export default Navbar;