import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services";
import axios from "axios";

interface UsePokedexProviderProps {
    children: React.ReactChild | React.ReactChild[] | React.ReactNode;
}

interface UsePokedexData {
    pokemon: Pokemon[];
}

interface Type {
    name: string;
    url: string;
}

interface Types {
    slot: number;
    type: Type;
}

interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

interface Pokemon {
    id: number;
    name: string;
    types: Types[];
    sprites: Sprites;
}

const UsePokedexContext = createContext<UsePokedexData>({} as UsePokedexData);

export function UsePokedexProvider(props: UsePokedexProviderProps) {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const url = "https://pokeapi.co/api/v2/";

    async function fetchPokemon() {
        const pokeArray: Pokemon[] = [];

        for (let index = 1; index <= 150; index++) {
            const { data } = await api.get<Pokemon>(`${url}pokemon/${index}`);

            pokeArray.push(data);
        }

        setPokemon(pokeArray);
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <UsePokedexContext.Provider value={{ pokemon }}>
            {props.children}
        </UsePokedexContext.Provider>
    );
}

export function usePokedex() {
    const context = useContext(UsePokedexContext);

    return context;
}
