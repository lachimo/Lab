
// import PropTypes from 'prop-types'
// import TableFooter from '@mui/material/TableFooter';

import { Box, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import * as St from './Footer.styled'
import { Copyright } from "@mui/icons-material"


const Footer = () => {
  return (
    <St.Footer>
        <Box className="container">
            {/* <Box className='social--links'></Box> */}
    
           <Box className="footer--inner">
                <ul className="member--footer__links">
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Mô tả âm thanh</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Quan hệ với nhà đầu tư</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Thông báo pháp lý</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Trung tâm trợ giúp</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Việc làm</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Cookie</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Thẻ quà tặng</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Điều khoản sử dụng</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Thông tin doanh nghiệp</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Trung tâm đa phương tiện</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Quyền riêng tư</NavLink></li>
                    <li className="link__wrapper"><NavLink style={{color:'grey'}}>Liên hệ với chúng tôi</NavLink></li>
                </ul>
        
                {/* <Box className="member--footer__service"></Box> */}
            
                <Box className="member--footer__copyright">
                    <Typography className="desc__copyright">
                        Copyright
                    </Typography>
                    <Copyright style={{margin:"0 4px", width:"15px"}}/>
                    <Typography className="desc__copyright">2023 Anime</Typography>
                </Box>
           </Box>
        </Box>
    </St.Footer>
  )
}

Footer.propTypes = {}

export default Footer