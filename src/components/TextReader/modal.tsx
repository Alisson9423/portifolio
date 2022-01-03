import { useState } from "react";
import { Button } from "alisson-application";
import { useTranslation } from "../../contexts/Localization";

interface PropsModal {
    active: boolean;
    closeModal: (active: boolean) => void;
    readText: (text: string) => void;
}

export function Modal(props: PropsModal) {
    const [value, setValue] = useState("");
    const { active, closeModal, readText } = props;
    const { t } = useTranslation();

    return (
        <div className={`text-box ${active ? "show" : ""}`}>
            <div
                className="close"
                onClick={() => {
                    closeModal(false);
                    setValue("");
                    readText("");
                }}
            >
                X
            </div>

            <textarea
                placeholder={t("Insira o texto a ser lido...")}
                maxLength={157}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></textarea>
            <Button
                variant="secondary"
                transparent
                id="read"
                onClick={() => readText(value)}
            >
                {t("Ler texto")}
            </Button>
        </div>
    );
}
