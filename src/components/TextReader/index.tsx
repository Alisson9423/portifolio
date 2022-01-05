import { useEffect, useState, useCallback } from "react";
import { Button, Text, Box } from "alisson-application";
import { Select } from "../Select";
import { Option } from "../Select/types";

import { Modal } from "./modal";

import { useTranslation } from "../../contexts/Localization";
import { languageListKeys, languageList } from "../../config/languages";
import { humanExpressions } from "./condig";
import { Container, ExpressionBbox } from "./styles";

export function TextReader() {
    const { t, setLanguage, currentLanguage } = useTranslation();
    const [modal, setModal] = useState(false);
    const [lang, setLang] = useState("pt-BR");
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [options, setOptions] = useState<Option[]>([]);

    const utterance = new SpeechSynthesisUtterance();
    const width = window.screen.width;

    const hasLanguage = useCallback(() => {
        return options.find(
            (item) =>
                item.others?.toLowerCase().replace(/_/g, "-") ===
                currentLanguage.locale.toLowerCase()
        );
    }, [options, currentLanguage.locale]);

    function setTextMenssage(text: string) {
        const voice =
            voices.find(
                (item) =>
                    item.lang.toLowerCase().replace(/_/g, "-") ===
                    lang.toLowerCase().replace(/_/g, "-")
            ) || voices[0];

        utterance.text = text;
        utterance.voice = voice;
        window.speechSynthesis.speak(utterance);
    }

    function focus(e: EventTarget) {
        const element = e as Element;
        element.classList.add("active");

        setTimeout(() => {
            element.classList.remove("active");
        }, 2000);
    }

    function readText(text: string) {
        if (text) {
            utterance.text = text;
            utterance.voice =
                voices.find((item) => item.lang === lang) || voices[0];
            window.speechSynthesis.speak(utterance);
        }
    }

    const voice = useCallback(() => {
        const voices = [...speechSynthesis.getVoices()];

        const updateLang = languageListKeys.map((item) => item.toLowerCase());

        const optionsList: Option[] = voices.reduce((acc, item) => {
            if (
                updateLang.includes(item.lang.toLowerCase().replace(/_/g, "-"))
            ) {
                acc.push({
                    label: item.name,
                    value: 1,
                    others: item.lang,
                });
            }

            return acc;
        }, [] as Option[]);

        setOptions(optionsList);
        setVoices(voices);
        setLang(currentLanguage.locale);
    }, [currentLanguage.locale]);

    useEffect(() => {
        if (voices.length === 0 && speechSynthesis.getVoices()) {
            voice();
        } else {
            speechSynthesis.addEventListener("voiceschanged", () => {
                voice();
            });
        }
    }, [voice, voices]);

    return (
        <Container>
            <Text as="h1" fontSize="mdl" bold>
                {t("Leitor de textos, com voz")}
            </Text>

            <Text as="h3">{t("Escolha o tipo de voz")}</Text>

            <Box m="0 auto" mb="32px" width="300px">
                {width < 1080 ? (
                    <Text as="p" color="failure" textAlign="center">
                        {t("Dispositivos mobiles necessário alterar")}
                        <br />
                        <strong> {t("idioma do dispositivo")}</strong>
                    </Text>
                ) : null}
                <Select
                    options={options}
                    initalValue={hasLanguage()}
                    placeholder={t("Idioma")}
                    onChange={(value) => {
                        const currentLang =
                            languageList.find(
                                (lang) =>
                                    lang.locale
                                        .toLowerCase()
                                        .replace(/_/g, "-") ===
                                    value.others
                                        ?.toLowerCase()
                                        .replace(/_/g, "-")
                            ) || languageList[0];

                        setLanguage(currentLang);

                        setLang(
                            value.others ? value.others.replace(/_/g, "-") : ""
                        );
                    }}
                />
            </Box>
            <Button
                variant="secondary"
                m="0 auto"
                mb="32px"
                transparent
                onClick={() => setModal(!modal)}
            >
                {t("Inserir texto")}
            </Button>

            <Modal active={modal} closeModal={setModal} readText={readText} />
            <main>
                {humanExpressions.map(({ text, img }) => {
                    return (
                        <ExpressionBbox
                            key={text}
                            className="box"
                            onClick={(el) => {
                                focus(el.currentTarget);
                                setTextMenssage(t(text));
                            }}
                        >
                            <img src={img} alt="" />
                            <Text className="info">{t(text)}</Text>
                        </ExpressionBbox>
                    );
                })}
            </main>
        </Container>
    );
}
