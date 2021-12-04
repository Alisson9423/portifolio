import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { lightColors } from "../styles/theme";
import { light, dark } from "alisson-application";
import { fonts } from "../styles/theme";

interface SCThemeProviderProps {
    children?: React.ReactChild | React.ReactChild[];
}

const ThemeContext = React.createContext({ light });

const ThemeContextProvider = ({ children }: SCThemeProviderProps) => {
    const teste = { ...light, ...lightColors };

    light.colors = { ...light.colors, ...lightColors };

    return (
        <ThemeContext.Provider value={{ light }}>
            <SCThemeProvider theme={light}>{children}</SCThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
