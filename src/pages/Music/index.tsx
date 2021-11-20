import { UseMusicProvider } from "../../Hook/UseMusic";
import { Music } from "../../components/Letras";

export function PageMusic() {
    return (
        <UseMusicProvider>
            <Music />
        </UseMusicProvider>
    );
}
