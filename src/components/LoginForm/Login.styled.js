import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FormStyled = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100vw; */
    height: 100vh;
    background-color: transparent;
    /* font-family: Fira Sans; */

    .container {
        min-width: 500px;
        min-height: 450px;
        background-color: white;
        border-radius: 20px;

        .login-form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }

        .login__title {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 40px 0 20px;
            width: 100%;

            .title {
                font-size: 1.4rem;
                font-weight: 500;
                font-family: Fira Sans;
            }
        }

        .login-form__input {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;

            .MuiFormGroup-root {
                margin-right: 200px;
            }

            .MuiTypography-root {
                font-family: Fira Sans;
            }

            .login__button {
                margin: 10px 0;
                min-width: 350px;
            }

            .form__link {
                display: flex;
                position: relative;
                width: 100%;
                margin: 40px 0 0 0;
                /* justify-content: space-between; */
                /* align-items: center; */
                /* flex-wrap: wrap; */

                .desc__link {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    /* top:; */
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.9rem;
                    /* margin-right: 10px; */
                }
            }
        }
    }
`;
