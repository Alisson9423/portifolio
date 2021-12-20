import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { lightColors, darkColorss } from "../styles/theme";
import { light, dark, Theme } from "alisson-application";
import { fonts } from "../styles/theme";

interface SCThemeProviderProps {
    children?: React.ReactChild | React.ReactChild[];
}
interface ThemeProviderProps {
    currentTheme: Theme;
    lightTheme: () => void;
    darkTheme: () => void;
    // dark?: Theme;
}

const ThemeContext = React.createContext<ThemeProviderProps>(
    {} as ThemeProviderProps
);

const ThemeContextProvider = ({ children }: SCThemeProviderProps) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(dark);
    dark.colors = { ...dark.colors, ...darkColorss };

    function lightTheme() {
        light.colors = { ...light.colors, ...lightColors };
        setCurrentTheme(light);
    }

    function darkTheme() {
        dark.colors = { ...dark.colors, ...darkColorss };
        setCurrentTheme(dark);
    }

    useEffect(() => {
        setCurrentTheme(dark);
    }, []);

    return (
        <ThemeContext.Provider value={{ lightTheme, darkTheme, currentTheme }}>
            <SCThemeProvider theme={currentTheme}>{children}</SCThemeProvider>
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext);
    return context;
}

export { ThemeContext, ThemeContextProvider };
