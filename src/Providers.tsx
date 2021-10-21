import React from "react";
import { ThemeContextProvider } from "./contexts/ThemeContext";

interface ProvidersProps {
    children?: React.ReactChild | React.ReactChild[];
}

export default function Providers({ children }: ProvidersProps) {
    return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
