import { useEffect, useState } from "react";

import { useLetras } from "../../Hook/UseLetras";
import { Header } from "./header";
import { Player } from "../Player";
import { Letra } from "./letra";
import { Loader } from "../Loader";
import { Modal } from "../Modal";
import { AudioList } from "./types";

import { TableList } from "./table";
import { Container } from "./styles";

export function Letras() {
    const { getMoreSongs, music, loader } = useLetras();
    const [modal, setModal] = useState<boolean>(false);
    const [audioList, setAudioList] = useState<AudioList[]>([]);
    const [activeTr, setActiveTr] = useState<number>(0);

    const [playIndex, setPlayIndex] = useState<number>(0);

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

    return (
        <Container>
            <Header
                setAudioList={setAudioList}
                setActiveTr={setActiveTr}
                setPlayIndex={setPlayIndex}
            />

            {music?.data.length && loader === false ? (
                <TableList
                    data={music.data}
                    setPlayIndex={setPlayIndex}
                    setModal={setModal}
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
                    <button
                        onClick={() => {
                            getMoreSongs(music.prev);
                            setPlayIndex(0);
                        }}
                        className="btn"
                    >
                        Anteriores
                    </button>
                )}

                {music?.next && (
                    <button
                        onClick={() => {
                            getMoreSongs(music.next);
                            setPlayIndex(0);
                        }}
                        className="btn"
                    >
                        Proximas
                    </button>
                )}
            </div>

            {audioList.length && (
                <Player
                    audioList={audioList}
                    setActiveTr={setActiveTr}
                    playIndex={playIndex}
                />
            )}
            <Modal component={Letra} active={modal} />
        </Container>
    );
}
