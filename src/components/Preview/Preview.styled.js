import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import theme from "../../components/Theme/Theme";


export const Preview = styled(Box)`

.preview--wrapper {

    display: flex;
    color: white;
    background-color: black;
    overflow: hidden;

    .preview--detail {
        width: 100%;
        .preview--image {
            position: relative;

            .image__detail {
                width: 100vw;
                height: 100vh;
                object-fit: cover;
            }


            .preview--buttons {
                display: flex;
                position: absolute;
                right:100px;
                bottom: 100px;

                button {
                    padding: 5px 25px;
                    border: none;
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.0rem;
                    cursor: pointer;

                }

                .preview__play {
                    margin-right: 20px;
                    transition: all 0.3s ease-in-out;

                    &:hover {
                        background-color: ${theme.color.second_hover_color} ;
                        color: ${theme.color.third_text};
                    }           
            
                }

                .preview__icon {
                    border: 2px solid ${theme.color.color_solid};
                    padding: 7px;
                    border-radius: 50%;
                    background-color: ${theme.color.primary_hover_color};
                    color: ${theme.color.second_text};
                    margin-right: 5px;

                    &:hover {
                        background-color: ${theme.color.second_color};
                        color: ${theme.color.third_color};
                    }

                }


            }

            .info--top {
                    display: flex;
                    position: absolute;
                    color: ${theme.color.primary_text};
                    right:100px;
                    bottom: 30px;
                    /* margin-bottom: 20px; */
                    margin-right: 20px;

                    .top__title {
                        margin-right: 10px;
                        font-size: 1.2rem;
                        font-weight: 600;
                    }

                    .top__limit {
                        border: 2px solid ${theme.color.second_color};
                        padding: 1px 3px;
                        margin: 0px 10px;
                        color: ${theme.color.second_text};
                        font-size: 1.1rem;
                    }
                }

        }

    }


    

    .container {
        width: 1400px;
        margin-left: auto;
        margin-right: auto;
        max-width: calc(100% - 48px);


        .preview--info {
            margin-top: 40px;
            width: 100%;
            background-color: #00000096;
            color: white;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .more--info {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;
                margin-top: 30px;
                /* margin-left: 70px; */
                border-radius: 3px;





                .info--movie {
                    display: flex;
                    justify-content:center;
                    align-items: flex-start;
                    flex-direction: column;

                    .movie__title {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        color: ${theme.color.second_color};
                        padding-bottom: 20px;
                        font-size: 1rem;
            
                        .movie__subtitle {
                            padding-left: 8px;
                            display: flex;
                            color: ${theme.color.second_text};
                            font-size: 1rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            max-width: 80%;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            
                        }

                    }

                }


        
            }


            .preview--content {
                display: flex;
                max-width: 800px;
                
                .desc {
                    width: 100%;
                }

            }

        }
    }


}
`


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

`