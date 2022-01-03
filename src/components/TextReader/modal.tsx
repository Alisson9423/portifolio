import { Button } from "alisson-application";
import { useTranslation } from "../../contexts/Localization";

interface PropsModal {
    active: boolean;
    closeModal: (active: boolean) => void;
}

export function Modal(props: PropsModal) {
    const { active, closeModal } = props;
    const { t } = useTranslation();

    return (
        <div className={`text-box ${active ? "show" : ""}`}>
            <div className="close" onClick={() => closeModal(false)}>
                X
            </div>

            <textarea
                placeholder={t("Insira o texto a ser lido...")}
            ></textarea>
            <Button variant="secondary" transparent id="read">
                {t("Ler texto")}
            </Button>
        </div>
    );
}
