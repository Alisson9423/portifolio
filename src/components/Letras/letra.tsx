import { Text } from "alisson-application";
import { Loader } from "../Loader";
import { ModalStyles } from "./styles";

import closeImg from "../../assets/img/close.svg";

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
    return (
        <ModalStyles>
            <div className="container-header">
                <Text as="h1" color="white" fontSize="mdl">
                    {rest.artist} asdasd
                </Text>
                <button onClick={() => rest.onClose()}>
                    <img src={closeImg} alt="" />
                </button>
            </div>

            <div className="content-body">
                {!rest.lyric ? (
                    rest.errorLyric ? (
                        <Text>Algo deu errado :( </Text>
                    ) : (
                        <Loader height={300} width={300} item={1} />
                    )
                ) : (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: rest.lyric.replace(/(\r\n|\r|\n)/g, "<br>"),
                        }}
                    ></div>
                )}
            </div>
        </ModalStyles>
    );
}
