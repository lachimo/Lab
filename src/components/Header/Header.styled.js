import styled from "styled-components";
import Theme from "../Theme/Theme";
import { AppBar, Toolbar } from "@mui/material";


export const StyledAppBar = styled(AppBar)``;
export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;

.header_left-logo {
    
}

.header-img {
    height: 25px;
}

.nav_menu {
    display: flex;
    margin-left: 50px;
}

.nav-items a {
        color: ${Theme.color.primary_color};
        font-weight: 200;
        font-size: 1.0rem;
        padding: 20px;
    }
 
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    object-fit: cover;
    cursor: pointer;
}





`;