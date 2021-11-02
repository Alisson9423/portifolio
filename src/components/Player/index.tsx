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
    playIndex: number;
}

export function Player(props: PlayerProps) {
    const { audioList, setActiveTr, playIndex } = props;
    // const cunstomLocale = {
    //     playModeText: {
    //         order: "Order",
    //         orderLoop: "Order",
    //         singleLoop: "",
    //         shufflePlay: "",
    //     },
    //     openText: "",
    //     closeText: "",
    //     emptyText: "",
    //     clickToPlayText: "",
    //     clickToPauseText: "",
    //     nextTrackText: "",
    //     previousTrackText: "",
    //     reloadText: "",
    //     volumeText: "",
    //     playListsText: "",
    //     toggleLyricText: "",
    //     toggleMiniModeText: "",
    //     destroyText: "",
    //     downloadText: "",
    //     lightThemeText: "",
    //     darkThemeText: "",
    //     switchThemeText: "",
    //     removeAudioListsText: "",
    //     controllerTitle: "",
    //     emptyLyricText: "",
    //     clickToDeleteText: (name) => ``,
    //     audioTitle: "",
    // };

    return (
        <ReactJkMusicPlayer
            glassBg
            audioLists={audioList}
            autoPlay={false}
            theme="dark"
            playIndex={playIndex}
            playModeShowTime={1000}
            showLyric={true}
            mode="full"
            onPlayIndexChange={(index: number) => {
                setActiveTr(index);
            }}
        ></ReactJkMusicPlayer>
    );
}
