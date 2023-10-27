import styled from "styled-components";
// import Theme from "../Theme/Theme";
import { AppBar, Toolbar } from "@mui/material";

export const StyledAppBar = styled(AppBar)``;
export const StyledToolbar = styled(Toolbar)`
    display: flex;
    /* justify-content: ; */
    align-items: center;
    position: relative;
    top: 0;
    z-index: 4;

    .header_left-logo {
        margin-left: 20px;

        .header-img {
            height: 25px;
        }
    }

    .nav_menu {
        display: flex;
        margin-left: 50px;
        cursor: pointer;

        .nav-items a {
            color: white;
            font-weight: 500;
            font-size: 1.3rem;
            padding: 20px;

            &:hover {
                color: red;
            }
        }
    }

    .header_right {
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        top: 0;
        position: absolute;

        .search {
            position: relative;
            display: inline-flex;
            align-items: center;
            width: 120px;
            transition: width 0.3s ease;
            border-radius: 3px;
            border: 1px solid white;

            &:hover {
                width: 200px;
            }

            .icon-wrapper {
                margin-left: 5px;
            }

            .search-input {
                padding-left: 5px;
                border: none;
                outline: none;
                width: 100%;
                font-size: 0.9rem;
                transition: width 0.3s ease;
                border-radius: 3px;
                color: white;

                &:focus {
                    width: 200px;
                }
            }
        }
    }

    .icon {
        margin: 20px 10px;
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
`;

// borderRadius: theme.shape.borderRadius,
// backgroundColor: alpha(theme.palette.common.white, 0.15),
// "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
// },
// [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
// },
// }));

// export const SearchIconWrapper = styled.div``
// (({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
// }));

// export const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     "& .MuiInputBase-input": {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create("width"),
//         width: "100%",
//         [theme.breakpoints.up("sm")]: {
//             width: "12ch",
//             "&:focus": {
//                 width: "20ch",
//             },
//         },
//     },
// }));
