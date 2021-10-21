import { ReactChild } from "react";
export interface ToggleProps {
    active: boolean;
    onClick?: () => void;
    titulo?: string | ReactChild;
}
