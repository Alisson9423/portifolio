import ReactJkMusicPlayer from "react-jinke-music-player";
import { useTheme } from "../../contexts/ThemeContext";
import "react-jinke-music-player/lib/styles/index.less";
import "./theme.css";

interface AudioList {
    name: string;
    singer: string;
    cover: string;
    musicSrc: string;
}
interface PlayerProps {
    audioList: AudioList[];
    setActiveTr: (index: number) => void;
    setPlayIndex: (index: number) => void;
    playIndex: number;
}

export function Player(props: PlayerProps) {
    const { audioList, setActiveTr, playIndex, setPlayIndex } = props;
    const { currentTheme, lightTheme, darkTheme } = useTheme();

    return (
        <ReactJkMusicPlayer
            glassBg
            audioLists={audioList}
            autoPlay={true}
            onAudioEnded={(audio) => {
                if (playIndex < 14) {
                    setPlayIndex(playIndex + 1);
                } else {
                    setPlayIndex(0);
                }
            }}
            theme={currentTheme.isDark ? "dark" : "light"}
            playIndex={playIndex}
            playModeShowTime={1000}
            mode="full"
            onThemeChange={() => {
                currentTheme.isDark ? lightTheme() : darkTheme();
            }}
            onPlayIndexChange={(index: number) => {
                setPlayIndex(index);
                setActiveTr(index);
            }}
        ></ReactJkMusicPlayer>
    );
}
