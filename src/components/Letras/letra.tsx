import { Text } from "alisson-application";
import { Loader } from "../Loader";
import { ModalStyles } from "./styles";

import { useTranslation } from "../../contexts/Localization";

interface lyricsProps {
    rest: {
        lyric: string;
        // title: string;
        artist: string;
        errorLyric: boolean;
        onClose: () => void;
    };
}

export function Letra(props: lyricsProps) {
    const { rest } = props;
    const { t } = useTranslation();
    return (
        <ModalStyles>
            <div className="container-header">
                <Text as="h1" color="primary" ellipsis={true} fontSize="mdl">
                    {rest.artist}
                </Text>
                <button onClick={() => rest.onClose()}></button>
            </div>

            <div className="content-body">
                {!rest.lyric ? (
                    rest.errorLyric ? (
                        <Text color="white">{t("Algo deu errado :(")}</Text>
                    ) : (
                        <Loader height={300} width={300} item={1} />
                    )
                ) : (
                    <div
                        className="text-content"
                        dangerouslySetInnerHTML={{
                            __html: rest.lyric.replace(/(\r\n|\r|\n)/g, "<br>"),
                        }}
                    ></div>
                )}
            </div>
        </ModalStyles>
    );
}
