import { UseLetrasProvider } from "../../Hook/UseLetras";
import { Letras } from "../../components/Letras";

export function Page() {
    return (
        <UseLetrasProvider>
            <Letras />
        </UseLetrasProvider>
    );
}
