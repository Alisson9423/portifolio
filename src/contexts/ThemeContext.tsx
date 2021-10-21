import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { theme } from "aplication-yetz";
import { fonts } from "../styles/theme";

interface SCThemeProviderProps {
    children?: React.ReactChild | React.ReactChild[];
}

const ThemeContext = React.createContext({
    theme,
});

const ThemeContextProvider = ({ children }: SCThemeProviderProps) => {
    theme.fonts = { ...theme.fonts, ...fonts };

    return (
        <ThemeContext.Provider value={{ theme }}>
            <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
