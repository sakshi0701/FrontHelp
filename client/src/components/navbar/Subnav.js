import React, { useState, useEffect } from 'react'
import * as actionType from '../../constants/actionTypes';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import { ImSwitch } from "react-icons/im";
import Sidebar from '../sidebar/Sidebar';
import './navbar.css';
import { ButtonElement } from '../PageStyles/Button';

const Subnav = () => {

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
        <div className="subnav">
            <div><Sidebar /></div>
            <div>
                {user?.result ? (
                    <div className="profile">
                        <img alt={user?.result.name} src={user?.result.imageUrl} style={{ paddingTop: "5px" }} />
                        <h4 style={{ color: "white", paddingTop: "5px" }}>{user?.result.name}</h4>
                        <button style={{ background: "transparent", border: "none" }} variant="contained" onClick={logout} ><ImSwitch style={{ color: "red", fontSize: "20px" }} /></button>
                    </div>
                ) : (
                    <ButtonElement style={{ width: "auto" }}><a style={{ textDecoration: "none", color: "white" }} href="/auth#card">Sign In</a></ButtonElement>
                )}
            </div>
        </div>
    )
}

export default Subnav;