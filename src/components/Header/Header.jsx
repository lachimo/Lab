import * as St from './Header.styled.js';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';

import logo from "../../assets/logo.svg";
import ava from "../../assets/Childe.png";
const Header = () => {
  return (
    <St.StyledAppBar>
      <St.StyledToolbar>
        <div className='header_left'>
          <div className='header_left-logo'>
            <img className='header-img'
              src={logo}
                alt=''
              />
          </div>
        </div>

        <ul className='nav_menu'>
          <li className='nav-items'><a href='!#'>Home</a></li>
          <li className='nav-items'><a href='!#'>Series</a></li>
          <li className='nav-items'><a href='!#'>New and Popular</a></li>
        </ul>

        <div className='header_right'>
          <Search/>
          <Notifications/>
          <img className='avatar' 
            src={ava}
          />
          <ArrowDropDown/>
        </div>
        
      </St.StyledToolbar>
    </St.StyledAppBar>
  )

}

export default Header;