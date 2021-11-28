import React from "react";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/Localization/";

interface ProvidersProps {
    children?: React.ReactChild | React.ReactChild[];
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ThemeContextProvider>
            <LanguageProvider>{children}</LanguageProvider>
        </ThemeContextProvider>
    );
}
