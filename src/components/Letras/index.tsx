import { useEffect, useState } from "react";
import { Button } from "alisson-application";

import { Language } from "../../contexts/Localization";

import { useMusic } from "../../Hook/UseMusic";
import { useTranslation } from "../../contexts/Localization";
import { Header } from "./header";
import { TableList } from "./table";
import { Player } from "../Player";
import { Letra } from "./letra";
import { Loader } from "../Loader";
import { Modal } from "../Modal";
import { AudioList } from "./types";

import { Container } from "./styles";

export function Music() {
    const {
        fetchLyrics,
        lyric,
        errorLyric,
        setErrorLyric,

        music,
        getMoreSongs,
        loader,
    } = useMusic();

    const { t, currentLanguage, setLanguage } = useTranslation();

    const [modal, setModal] = useState<boolean>(false);
    const [audioList, setAudioList] = useState<AudioList[]>([]);
    const [activeTr, setActiveTr] = useState<number>(0);
    const [playIndex, setPlayIndex] = useState<number>(0);
    const [artist, setArtist] = useState<string>("");

    const config = {
        lyric,
        artist,
        errorLyric,
        onClose: () => handleClose(),
    };

    function handleClose() {
        setModal(false);
        setErrorLyric(false);
        setArtist("");
    }

    function getLyric(name: string, artist: string) {
        setModal(true);
        setArtist(name);
        fetchLyrics(name, artist);
    }

    useEffect(() => {
        const audioList: AudioList[] = music?.data
            ? music?.data.map((item) => {
                  return {
                      name: item.title,
                      singer: item.artist.name,
                      cover: item.album.cover_big,
                      musicSrc: item.preview,
                  };
              })
            : [];
        setAudioList(audioList);
    }, [music]);

    const lang: Language = {
        locale: "en-US",
        language: "English",
        code: "en",
    };

    return (
        <Container>
            <Header
                setAudioList={setAudioList}
                setActiveTr={setActiveTr}
                setPlayIndex={setPlayIndex}
            />

            <Button onClick={() => setLanguage(lang)}>teste</Button>
            {music?.data.length && loader === false ? (
                <TableList
                    data={music.data}
                    setPlayIndex={setPlayIndex}
                    getLyric={getLyric}
                    activeTr={activeTr}
                />
            ) : loader ? (
                <Loader height={300} width={300} />
            ) : null}

            <div
                id="prev-and-next-container"
                className="prev-and-next-container"
            >
                {music?.prev && (
                    <Button
                        onClick={() => {
                            getMoreSongs(music.prev);
                            setPlayIndex(0);
                        }}
                        className="btn"
                    >
                        Anteriores
                    </Button>
                )}

                {music?.next && (
                    <Button
                        onClick={() => {
                            getMoreSongs(music.next);
                            setPlayIndex(0);
                        }}
                        className="btn"
                    >
                        Proximas
                    </Button>
                )}
            </div>

            {audioList.length ? (
                <Player
                    audioList={audioList}
                    setActiveTr={setActiveTr}
                    playIndex={playIndex}
                    setPlayIndex={setPlayIndex}
                />
            ) : null}
            <Modal component={Letra} active={modal} rest={config} />
        </Container>
    );
}
