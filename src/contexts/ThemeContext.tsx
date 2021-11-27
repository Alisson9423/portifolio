import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { light, dark } from "alisson-application";
import { fonts } from "../styles/theme";

interface SCThemeProviderProps {
    children?: React.ReactChild | React.ReactChild[];
}

const ThemeContext = React.createContext({ dark });

const ThemeContextProvider = ({ children }: SCThemeProviderProps) => {
    return (
        <ThemeContext.Provider value={{ dark }}>
            <SCThemeProvider theme={dark}>{children}</SCThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
