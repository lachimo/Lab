import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const Switch = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <Box className={`App ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1>Hello</h1>
        </Box>
    );
};

Switch.propTypes = {};

export default Switch;
