import React, { useState, useEffect } from 'react'
import * as actionType from '../../constants/actionTypes';
import { FaBars, FaHandsHelping } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import { ImSwitch } from "react-icons/im";
import './navbar.css'

const Navbar = () => {

    const [profileSection, setProfileSection] = useState(false);
    const handleClick = () => setProfileSection(!profileSection);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <div className="navbar" style={{ color: 'white' }}>
            <p className="logo"></p>
            <p className="name"><Link to="/"><FaHandsHelping style={{ color: "cyan", padding: "5px" }} /> FrontHelp</Link></p>
            <p className="reflection">FrontHelp</p>
            <div className="nav-menu">
                {user?.result ? (
                    <div className="profile">
                        <img alt={user?.result.name} src={user?.result.imageUrl} />
                        <h4 style={{color: "white"}}>{user?.result.name}</h4>
                        <button style={{ background: "transparent", border: "none" }} variant="contained" onClick={logout}><ImSwitch style={{color: "red", fontSize:"20px"}} /></button>
                    </div>
                ) : (
                    <button><Link to="/auth">Sign In</Link></button>
                )}
            </div>
            <div onClick={handleClick}>
                <div className="icon">{ profileSection ? <AiOutlineClose /> : <FaBars /> }</div>
            </div>
        </div>
    );
};

export default Navbar;