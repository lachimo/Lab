// import React from "react";
// import PropTypes from "prop-types";
import React, { useState } from "react";
import * as St from "./Login.styled";

import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return (
        <St.FormStyled>
            <Box className="container">
                <Box className="login-form">
                    <Box className="login__title">
                        <Typography className="title">
                            Welcome to Nane
                        </Typography>
                    </Box>
                    <Box className="login-form__input">
                        <FormControl
                            sx={{ m: 1, minWidth: "350px" }}
                            variant="outlined"
                        >
                            <InputLabel style={{ fontFamily: "Fira Sans" }}>
                                Your name
                            </InputLabel>
                            <OutlinedInput required label="Your name" />
                        </FormControl>

                        <FormControl
                            sx={{ m: 1, minWidth: "350px" }}
                            variant="outlined"
                        >
                            <InputLabel
                                style={{ fontFamily: "Fira Sans" }}
                                htmlFor="outlined-password"
                            >
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-password"
                                type={showPassword ? "text" : "password"}
                                label="Password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Remember me"
                            />
                        </FormGroup>

                        <Button
                            className="login__button"
                            variant="contained"
                            size="large"
                        >
                            Sign in
                        </Button>

                        <Box className="form__link">
                            <NavLink className="desc__link">
                                Don't have an account? Sign Up
                            </NavLink>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </St.FormStyled>
    );
};

LoginForm.propTypes = {};

export default LoginForm;
