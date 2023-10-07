import * as St from './Header.styled.js';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';

import logo from "../../assets/logo/logo.svg";
import ava from "../../assets/avatar/Childe.png";
import { Box, Switch } from '@mui/material';
import { NavLink } from 'react-router-dom';
import configs from '../../configs/index.js';
import useScroll from '../../hooks/useScroll.js';
import { useState } from 'react';


const Header = () => {
  const [scrollY] = useScroll();
  const [isLightMode, setIsLightMode] = useState(false);

  const handleChange = () => {
    setIsLightMode(!isLightMode)
  }


  const headerLeftClass = isLightMode
        ? "header_left light"
        : "header_left dark";

    const headerLeftStyle = isLightMode
        ? { backgroundColor: "lightpink", boxShadow: "none" }
        : scrollY < 300
        ? { backgroundColor: "transparent", boxShadow: "none" }
        : { backgroundColor: "black", boxShadow: "none" };

  return (
    <St.StyledAppBar 
        // style={
        //   scrollY < 300 
        //       ? {backgroundColor: "transparent", boxShadow: "none"}
        //       : {backgroundColor: "black", boxShadow: "none"} 
        // }
        style={headerLeftStyle}
        >
      <St.StyledToolbar>
        <Box className={headerLeftClass}>
          <Box className='header_left-logo'>
            <img className='header-img'
              src={logo}
                alt=''
              />
          </Box>
        </Box>

        <ul className='nav_menu'>
          <li className='nav-items'><NavLink to={configs.routes.home}>Home</NavLink></li>
          <li className='nav-items'><NavLink>Series</NavLink></li>
          <li className='nav-items'><NavLink to={configs.routes.contact}>Contact</NavLink></li>
        </ul>

        <Box className='header_right'>
          <Search className='icon'/>
          <Notifications className='icon'/>
          <img className='avatar' 
            src={ava}
          />
          <Box className='profile'>
            <ArrowDropDown className='icon'/>
            <Box className='options'>
              <span>Setting</span>
              <span>Log out</span>
              <Switch checked={isLightMode}
                onChange={handleChange}
              />
            </Box>
          </Box>
        </Box>
        
      </St.StyledToolbar>
    </St.StyledAppBar>
  )

}

export default Header;