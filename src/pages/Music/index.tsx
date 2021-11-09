import { UseMusicProvider } from "../../Hook/UseMusic";
import { Letras } from "../../components/Letras";

export function Music() {
    return (
        <UseMusicProvider>
            <Letras />
        </UseMusicProvider>
    );
}
