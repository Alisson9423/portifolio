import { Language } from "../contexts/Localization/Provider";

export const EN: Language = {
    locale: "en-US",
    language: "English",
    code: "en",
};
export const PTBR: Language = {
    locale: "pt-BR",
    language: "Português (Brazil)",
    code: "pt-br",
};

export const languages = {
    "en-US": EN,
    "pt-BR": PTBR,
};

export const languageList = Object.values(languages);
export const languageListKeys = Object.keys(languages);
