import { useEffect, useState } from "react";
import { Button, Text } from "alisson-application";

import { Modal } from "./modal";

import { useTranslation } from "../../contexts/Localization";
import { languageListKeys } from "../../config/languages";
import { humanExpressions } from "./condig";
import { Container, ExpressionBbox } from "./styles";

export function TextReader() {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

    function setTextMenssage(text: string) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        window.speechSynthesis.speak(utterance);
    }

    useEffect(() => {
        speechSynthesis.addEventListener("voiceschanged", () => {
            setVoices(
                speechSynthesis
                    .getVoices()
                    .filter(({ lang }) => languageListKeys.includes(lang))
            );
        });
    }, []);

    return (
        <Container>
            <Text as="h1" fontSize="mdl" bold>
                {t("Leitor de textos, com voz")}
            </Text>

            <Text as="h3">{t("Escolha o tipo de voz")}</Text>
            <select>
                {voices.map((lang) => {
                    return (
                        <option key={lang.name} id="">
                            {lang.name}
                        </option>
                    );
                })}
            </select>

            <Button
                variant="secondary"
                m="0 auto"
                mb="32px"
                transparent
                onClick={() => setModal(!modal)}
            >
                {t("Inserir texto")}
            </Button>

            <Modal active={modal} closeModal={setModal} />

            <main>
                {humanExpressions.map((expression) => {
                    return (
                        <ExpressionBbox
                            key={expression.text}
                            className="expression-box"
                            onClick={() => setTextMenssage(expression.text)}
                        >
                            <img src={expression.img} alt="" />
                            <Text className="info">{t(expression.text)}</Text>
                        </ExpressionBbox>
                    );
                })}
            </main>
        </Container>
    );
}
