import { Text } from "alisson-application";

import { usePokedex } from "../../Hook/UsePokedex";
import { Loader } from "../Loader";

import { Container } from "./styles";

export function Pokedex() {
    const { pokemon } = usePokedex();

    if (pokemon.length === 0) {
        return (
            <div className="container-loader">
                <Loader height={300} width={300} />
            </div>
        );
    }

    return (
        <Container>
            <Text as="h1" mb="32px">
                Pokedex
            </Text>
            <ul data-js="pokedex" className="pokedex">
                {pokemon.map((pokemon) => {
                    const types = pokemon.types.map(
                        (typeInfo) => typeInfo.type.name
                    );
                    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

                    return (
                        <li className={`card ${types[0]}`}>
                            <img src={img} className="card-image" alt="" />
                            <Text as="h2" className="card-title">
                                {pokemon.id} - {pokemon.name}
                            </Text>
                            <Text as="p" className="card-subtitle">
                                {types.join(" | ")}
                            </Text>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
}
