import { useEffect, useState } from "react";
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

    function setTextMenssage(text: string) {
        utterance.text = text;
        utterance.voice =
            voices.find((item) => item.lang === lang) || voices[0];
        window.speechSynthesis.speak(utterance);
    }

    function changeLang(e: React.ChangeEvent<HTMLSelectElement>) {
        const currentLang =
            languageList.find((lang) => lang.locale === e.target.value) ||
            languageList[0];

        setLanguage(currentLang);

        setLang(e.target.value);
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

    useEffect(() => {
        speechSynthesis.addEventListener("voiceschanged", () => {
            const suportLang = speechSynthesis
                .getVoices()
                .filter((lang) => languageListKeys.includes(lang.lang));

            const options: Option[] = suportLang.map((item, key) => {
                return { label: item.name, value: key + 1, others: item.lang };
            });

            setOptions(options);
            setVoices(suportLang);
        });
    }, [lang]);

    useEffect(() => {
        setLang(currentLanguage.locale);
    }, [currentLanguage]);

    return (
        <Container>
            <Text as="h1" fontSize="mdl" bold>
                {t("Leitor de textos, com voz")}
            </Text>

            <Text as="h3">{t("Escolha o tipo de voz")}</Text>

            <Box m="0 auto" mb="32px" width="300px">
                <Select
                    options={options}
                    placeholder="Idioma"
                    onChange={(value) => {
                        const currentLang =
                            languageList.find(
                                (lang) => lang.locale === value.others
                            ) || languageList[0];

                        setLanguage(currentLang);

                        setLang(value.others ? value.others : "");
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
