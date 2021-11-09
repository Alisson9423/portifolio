import ReactJkMusicPlayer from "react-jinke-music-player";
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

    return (
        <ReactJkMusicPlayer
            glassBg
            audioLists={audioList}
            autoPlay={false}
            onAudioEnded={(audio) => {
                if (playIndex < 14) {
                    setPlayIndex(playIndex + 1);
                } else {
                    setPlayIndex(0);
                }
            }}
            theme="dark"
            playIndex={playIndex}
            playModeShowTime={1000}
            mode="full"
            onPlayIndexChange={(index: number) => {
                setPlayIndex(index);
                setActiveTr(index);
            }}
        ></ReactJkMusicPlayer>
    );
}
