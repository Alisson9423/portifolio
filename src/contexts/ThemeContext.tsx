import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { lightColors } from "../styles/theme";
import { light, dark, Theme } from "alisson-application";
import { fonts } from "../styles/theme";

interface SCThemeProviderProps {
    children?: React.ReactChild | React.ReactChild[];
}
interface ThemeProviderProps {
    currentTheme: Theme;
    light?: Theme;
    // dark?: Theme;
}

const ThemeContext = React.createContext<ThemeProviderProps>(
    {} as ThemeProviderProps
);

const ThemeContextProvider = ({ children }: SCThemeProviderProps) => {
    light.colors = { ...light.colors, ...lightColors };

    const [currentTheme, setCurrentTheme] = useState<Theme>(light);

    useEffect(() => {
        setCurrentTheme(light);
    }, []);

    return (
        <ThemeContext.Provider value={{ light, currentTheme }}>
            <SCThemeProvider theme={light}>{children}</SCThemeProvider>
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext);
    return context;
}

export { ThemeContext, ThemeContextProvider };
