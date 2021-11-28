import React, { createContext, useCallback, useEffect, useState } from "react";
import { PTBR, languages, languageListKeys } from "../../config/languages";
import translations from "../../config/translation.json";
import {
    ContextApi,
    ContextData,
    ProviderState,
    VariantLanguage,
} from "./types";
import { LS_KEY, fetchLocale, getLanguageCodeFromLS } from "./helpers";

export interface Language {
    code: string;
    language: string;
    locale: string;
}

const initialState: ProviderState = {
    isFetching: true,
    currentLanguage: PTBR,
};

export const languageMap = new Map<
    Language["locale"],
    Record<string, string>
>();
languageMap.set(PTBR.locale, translations);

export const LanguageContext = createContext<ContextApi>({} as ContextApi);

export const LanguageProvider: React.FC = ({ children }) => {
    const [state, setState] = useState<ProviderState>(() => {
        const codeFromStorage = getLanguageCodeFromLS();

        const language =
            (Object.keys(languages) as VariantLanguage[]).filter(
                (lang) => lang === codeFromStorage
            )[0] || "pt-BR";

        return {
            ...initialState,
            currentLanguage: languages[language],
        };
    });
    const { currentLanguage } = state;

    useEffect(() => {
        const fetchInitialLocales = async () => {
            const codeFromStorage = getLanguageCodeFromLS();

            if (codeFromStorage !== PTBR.locale) {
                const enLocale = languageMap.get(PTBR.locale);
                const currentLocale = await fetchLocale(codeFromStorage);
                languageMap.set(codeFromStorage, {
                    ...enLocale,
                    ...currentLocale,
                });
            }

            setState((prevState) => ({
                ...prevState,
                isFetching: false,
            }));
        };

        fetchInitialLocales();
    }, [setState]);

    const setLanguage = async (language: Language) => {
        if (!languageMap.has(language.locale)) {
            setState((prevState) => ({
                ...prevState,
                isFetching: true,
            }));

            const locale = await fetchLocale(language.locale);
            const enLocale = languageMap.get(PTBR.locale);

            // Merge the PTBR locale to ensure that any locale fetched has all the keys
            languageMap.set(language.locale, { ...enLocale, ...locale });
            localStorage.setItem(LS_KEY, language.locale);

            setState((prevState) => ({
                ...prevState,
                isFetching: false,
                currentLanguage: language,
            }));
        } else {
            localStorage.setItem(LS_KEY, language.locale);
            setState((prevState) => ({
                ...prevState,
                isFetching: false,
                currentLanguage: language,
            }));
        }
    };

    const translate = useCallback(
        (key: string, data?: ContextData) => {
            const translationSet = languageMap.has(currentLanguage.locale)
                ? languageMap.get(currentLanguage.locale)
                : languageMap.get(PTBR.locale);
            const translatedText = translationSet
                ? translationSet[key] || key
                : "";

            // Check the existence of at least one combination of %%, separated by 1 or more non space characters
            const includesVariable = translatedText.match(/%\S+?%/gm);

            if (includesVariable && data) {
                let interpolatedText = translatedText;
                Object.keys(data).forEach((dataKey) => {
                    const templateKey = new RegExp(`%${dataKey}%`, "g");
                    interpolatedText = interpolatedText.replace(
                        templateKey,
                        data[dataKey].toString()
                    );
                });

                return interpolatedText;
            }

            return translatedText;
        },
        [currentLanguage]
    );

    return (
        <LanguageContext.Provider
            value={{ ...state, setLanguage, t: translate }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
