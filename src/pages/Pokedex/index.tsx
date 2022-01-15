import { Pokedex } from "../../components/Pokedex";
import { UsePokedexProvider } from "../../Hook/UsePokedex";
export function PagePokedex() {
    return (
        <UsePokedexProvider>
            <Pokedex />;
        </UsePokedexProvider>
    );
}
