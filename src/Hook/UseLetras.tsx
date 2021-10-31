import React, { createContext, useContext, useState } from "react";
import { api } from "../services";

interface UseLetrasProviderProps {
    children: React.ReactChild | React.ReactChild[] | React.ReactNode;
}

interface UseLetrasData {
    fetchSongs: (term: string) => void;

    loader: boolean;
    music: Music[];
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
}

const UseLetrasContext = createContext<UseLetrasData>({} as UseLetrasData);

export function UseLetrasProvider(props: UseLetrasProviderProps) {
    const [music, setMusict] = useState<Music[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const { children } = props;

    async function fetchSongs(term: string) {
        setLoader(true);
        try {
            const { data } = await api.get<MusicData>(`suggest/${term}`);
            setMusict(data.data);
            setLoader(false);
        } catch (error) {
            console.log(error);
            setLoader(false);
        }
    }

    return (
        <UseLetrasContext.Provider value={{ fetchSongs, music, loader }}>
            {children}
        </UseLetrasContext.Provider>
    );
}

export function useLetras() {
    const context = useContext(UseLetrasContext);
    return context;
}
