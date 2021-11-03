import React, { createContext, useContext, useState } from "react";
import { api } from "../services";
import axios from "axios";

interface UseLetrasProviderProps {
    children: React.ReactChild | React.ReactChild[] | React.ReactNode;
}

interface UseLetrasData {
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

export interface Music {
    title: string;
    preview: string;
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

const UseLetrasContext = createContext<UseLetrasData>({} as UseLetrasData);

export function UseLetrasProvider(props: UseLetrasProviderProps) {
    const [music, setMusict] = useState<MusicData>();
    const [loader, setLoader] = useState<boolean>(false);

    const [lyric, setLyric] = useState<string>("");
    const [errorLyric, setErrorLyric] = useState<boolean>(false);

    const { children } = props;

    async function fetchSongs(term: string) {
        setLoader(true);
        try {
            const { data } = await api.get<MusicData>(`suggest/${term}`);
            setMusict(data);
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
        <UseLetrasContext.Provider
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
        </UseLetrasContext.Provider>
    );
}

export function useLetras() {
    const context = useContext(UseLetrasContext);
    return context;
}
