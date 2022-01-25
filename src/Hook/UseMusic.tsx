import React, { createContext, useContext, useState } from "react";
import { api } from "../services";
import axios from "axios";

interface UseMusicProviderProps {
    children: React.ReactChild | React.ReactChild[] | React.ReactNode;
}

interface UseMusicData {
    fetchSongs: (term: string) => void;
    fetchLyrics: (name: string, artist: string) => void;
    getMoreSongs: (url: string) => void;

    loader: boolean;
    music?: MusicData;

    lyric: string;
    setErrorLyric: (error: boolean) => void;
    errorLyric: boolean;
}

interface Album {
    cover: string;
    title: string;
    cover_small: string;
    cover_big: string;
    tracklist: string;
}

interface Artist {
    name: string;
    picture_big: string;
    link: string;
    picture_small: string;
}

interface MusicDezer {
    preview: string;
}

export interface Music {
    title: string;
    preview: string;
    preview_deezer: string;
    id: number;
    artist: Artist;
    album: Album;
    link: string;
}

interface MusicData {
    data: Music[];
    total: number;
    next: string;
    prev: string;
}

interface lyricsData {
    lyrics: string;
}

const UseMusicContext = createContext<UseMusicData>({} as UseMusicData);

export function UseMusicProvider(props: UseMusicProviderProps) {
    //git
    const [music, setMusict] = useState<MusicData>();
    const [loader, setLoader] = useState<boolean>(false);

    const [lyric, setLyric] = useState<string>("");
    const [errorLyric, setErrorLyric] = useState<boolean>(false);

    const { children } = props;

    async function fetchSongs(term: string) {
        setLoader(true);
        try {
            const { data } = await api.get<MusicData>(`suggest/${term}`);

            const dados: Music[] = await Promise.all(
                data.data.map(async (item) => {
                    const { link } = item;
                    const pos = link.lastIndexOf("/") + 1;
                    const track = link.substring(pos);

                    const { data } = await axios.get<MusicDezer>(
                        `https://api.deezer.com/track/${track}`
                    );

                    return { ...item, preview_deezer: data.preview };
                })
            );

            setMusict({ ...data, data: dados });
            setLoader(false);
        } catch (error) {
            console.log(error);
            setLoader(false);
        }
    }

    async function fetchLyrics(name: string, artist: string) {
        setLyric("");
        try {
            const { data } = await api.get<lyricsData>(`v1/${artist}/${name}`);
            setLyric(data.lyrics);
            setErrorLyric(false);
        } catch (error) {
            setErrorLyric(true);
            console.log(error);
        }
    }

    async function getMoreSongs(url: string) {
        setLoader(true);
        setMusict(undefined);
        try {
            const { data } = await axios.get<MusicData>(
                `https://cors-anywhere.herokuapp.com/${url}`,
                {
                    headers: {
                        origin: "x-requested-with",
                    },
                }
            );
            setMusict(data);
            setLoader(false);
        } catch (error) {
            console.log(error);
            setLoader(false);
        }
    }

    return (
        <UseMusicContext.Provider
            value={{
                fetchLyrics,
                lyric,
                errorLyric,
                setErrorLyric,

                fetchSongs,
                getMoreSongs,
                music,
                loader,
            }}
        >
            {children}
        </UseMusicContext.Provider>
    );
}

export function useMusic() {
    const context = useContext(UseMusicContext);
    return context;
}
