import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Footer = styled(Box)`
background-color: black;


.container {
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 48px);
    color: grey;
    padding: 140px 0 40px 0;
    
    .member--footer__links {
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 1rem;
        margin: 0 0 14px;
        padding: 0;

        .link__wrapper{
            box-sizing: border-box;
            flex-basis: 25%;
            list-style: none;
            margin-bottom: 16px;
            padding-right: 22px;
        }
    }

    .member--footer__copyright {
        color: grey;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
}

`