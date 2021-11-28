import { ReactText } from "react";
import { Language } from "./Provider";

export const language = {
    "PT-BR": "pt-BR",
    "EN-US": "en-US",
} as const;

export type VariantLanguage = typeof language[keyof typeof language];

export type ContextData = {
    [key: string]: ReactText;
};

export interface ProviderState {
    isFetching: boolean;
    currentLanguage: Language;
}

export interface ContextApi extends ProviderState {
    setLanguage: (language: Language) => void;
    t: (key: string, data?: ContextData) => string;
}
