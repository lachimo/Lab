import styled from "styled-components";
import theme from "../Theme/Theme";
import { Box, Modal } from "@mui/material";

export const DivIntro = styled(Box)`
    .intro_inner {
        /* width: auto;
    overflow: hidden; */
        position: relative;
    }

    .intro_img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        filter: opacity(0.4); // điều chỉnh độ mờ của hình ảnh
    }

    .intro_info {
        width: 40%;
        position: absolute;
        right: 50px;
        bottom: 60px;
        /* background-color: #00000096; */
        color: white;
        display: flex;
        flex-direction: column;
        border-radius: 5px;

        .desc {
            margin: 5px 20px 20px 20px;
            font-size: 1rem;
            font-weight: 400;
            font-family: Fira Sans;
            line-height: 2;
            display: -webkit-box; /* Viết ngắn gọn cho đoạn text, đoạn text sẽ được ghi ra trong khoảng bao nhiêu dòng đó rồi "..." */
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            overflow-wrap: break-word; /* Xuống dòng */
        }
    }

    .buttons {
        display: flex;

        button {
            padding: 5px 25px;
            border: none;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            margin-bottom: 10px;
            cursor: pointer;
        }

        p {
            font-weight: 600;
        }

        .play {
            margin-left: 20px;
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: ${theme.color.second_hover_color};
                color: ${theme.color.third_text};
            }
        }

        .more {
            margin-left: 10px;
            background-color: ${theme.color.second_color};
            color: ${theme.color.primary_text};
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: ${theme.color.primary_hover_color};
            }
        }
    }
`;

export const StyledModal = styled(Modal)`
    .modal__wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 68vw;
        height: 80vh;
        background-color: #000;
        border-radius: 40px;

        display: flex;
        justify-content: center;
        align-items: center;

        .video {
            width: 94%;
            height: 90%;
            object-fit: cover;
            border-radius: 20px;
            border: 1px solid #000;
            overflow: hidden;
        }
    }
`;
