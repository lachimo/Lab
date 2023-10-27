import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Footer = styled(Box)`
background-color: black;


.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 48px);
    color: grey;
    padding: 140px 0 40px 0;
    
    .member--footer__links {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 1rem;
        margin: 0 0 14px;
        padding: 0;

        .link__wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            flex-basis: 25%;
            list-style: none;
            margin-bottom: 16px;
            padding-right: 22px;
            font-size: 1rem;
            font-weight: 400;
        }
    }

    .member--footer__copyright {
        color: grey;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;

        .desc__copyright {
            font-family: Fira Sans;
            font-size: 0.8rem;
        }
    }
}

`