import { useState } from "react";
import { Container } from "./styles";

import menoImg from "../../assets/sistema/menos.svg";
import maisImg from "../../assets/sistema/mais.svg";

export function Contador() {
    const [value, setValue] = useState(0);

    function decrementar() {
        if (value > 0) {
            setValue(value - 1);
        }
    }
    function incrementar() {
        setValue(value + 1);
    }

    return (
        <Container>
            <button onClick={decrementar}>
                <img src={menoImg} alt="" />
            </button>
            {value}

            <button onClick={incrementar}>
                <img src={maisImg} alt="" />
            </button>
        </Container>
    );
}
