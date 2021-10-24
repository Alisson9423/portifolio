import React, { createContext, useContext, useState } from "react";
import { api } from "../services";

interface UseLetrasProviderProps {
    children: React.ReactChild | React.ReactChild[] | React.ReactNode;
}

interface UseLetrasData {
    fetchSongs: (term: string) => void;

    music: Music[];
}

interface Album {
    cover: string;
    title: string;
    cover_small: string;
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
    const { children } = props;

    async function fetchSongs(term: string) {
        const { data } = await api.get<MusicData>(`suggest/${term}`);
        setMusict(data.data);
    }

    return (
        <UseLetrasContext.Provider value={{ fetchSongs, music }}>
            {children}
        </UseLetrasContext.Provider>
    );
}

export function useLetras() {
    const context = useContext(UseLetrasContext);
    return context;
}
