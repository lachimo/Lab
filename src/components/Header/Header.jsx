import * as St from './Header.styled.js';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';

import logo from "../../assets/logo/logo.svg";
import ava from "../../assets/avatar/Childe.png";
const Header = () => {
  return (
    <St.StyledAppBar style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
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
          <Search className='icon'/>
          <Notifications className='icon'/>
          <img className='avatar' 
            src={ava}
          />
          <div className='profile'>
            <ArrowDropDown className='icon'/>
            <div className='options'>
              <span>Setting</span>
              <span>Log out</span>
            </div>
          </div>
        </div>
        
      </St.StyledToolbar>
    </St.StyledAppBar>
  )

}

export default Header;