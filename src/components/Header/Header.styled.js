import styled from "styled-components";
// import Theme from "../Theme/Theme";
import { AppBar, Toolbar } from "@mui/material";


export const StyledAppBar = styled(AppBar)``;
export const StyledToolbar = styled(Toolbar)`

    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    z-index: 4 ;

.header-img {
    height: 25px;
}

.nav_menu {
    display: flex;
    margin-left: 50px;
    cursor: pointer;
}

.nav-items a {
        color: white ;
        font-weight: 200;
        font-size: 1.0rem;
        padding: 20px;
    }
 


.header_right {
    display: flex;

    .icon {
            margin: 20px 10px ;
            cursor: pointer;
        }

    .avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    object-fit: cover;
    cursor: pointer;
    margin: 10px;
}

    .profile {
        .options {
            display: none;
            background-color: black;
            border-radius: 5px;
        }

        span {
            padding: 10px 12px;
            cursor: pointer;
            font-size: 0.8rem;
        }

        &:hover {
            .options {
                display: flex;
                flex-direction: column;
                position: absolute;
            }
        }
    }
    
}



`;