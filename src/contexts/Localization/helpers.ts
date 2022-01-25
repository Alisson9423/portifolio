import { PTBR } from "../../config/languages";

const publicUrl = process.env.PUBLIC_URL;

export const LS_KEY = "language";

export const fetchLocale = async (locale: string) => {
    const response = await fetch(`${publicUrl}/locales/${locale}.json`);
    const data = await response.json();
    return data;
};

export const getLanguageCodeFromLS = () => {
    try {
        const codeFromStorage = localStorage.getItem(LS_KEY);

        return codeFromStorage || PTBR.locale;
    } catch {
        return PTBR.locale;
    }
};
