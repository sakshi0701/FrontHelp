import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from "./SidebarData";
import Submenu from './Submenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
    background: #15171c;
    height: 10vh;
    width: 55px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
`;

const NavIcon = styled(Link)`
    margin-left: 0.7rem;
    height: 100px;
    font-size: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350px;
    z-index: 10;
    margin-top: 90px;
`;

const SidebarWrap = styled.nav`
    width: 100%;
`;

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: `#fff` }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} key={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;