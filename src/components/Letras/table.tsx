import { Table, Flex, Text } from "alisson-application";
import Marquee from "react-fast-marquee";
import { Column } from "react-table";
import { useTranslation } from "../../contexts/Localization";
import { Music } from "../../Hook/UseMusic";
import { FiBook } from "react-icons/fi";
import { Data } from "./types";
import { useTheme } from "../../contexts/ThemeContext";
import { TableStyles } from "./styles";

interface TableProps {
    data: Music[];
    setPlayIndex: (index: number) => void;
    getLyric: (name: string, artist: string) => void;
    activeTr: number;
}

export function TableList(props: TableProps) {
    const { data, activeTr, setPlayIndex, getLyric } = props;
    const { t } = useTranslation();
    const { currentTheme } = useTheme();
    const width = window.screen.width;

    const conlumn: Column<Data>[] = [
        {
            Header: t("Titulo"),
            accessor: "title",
            width: width < 480 ? 180 : 215,
            maxWidth: width < 480 ? 180 : 215,
        },
        {
            Header: t("Artista"),
            accessor: "artist",
            width: width < 480 ? 250 : 300,
            maxWidth: width < 480 ? 250 : 300,
        },

        {
            Header: t("Album"),
            accessor: "album",
            width: width < 480 ? 300 : 480,
            maxWidth: width < 480 ? 300 : 480,
        },

        {
            Header: t("Letra"),
            accessor: "lyric",
        },
    ];

    const dados: Data[] = data.map((item, key) => {
        const { artist, album, title } = item;
        const { name } = artist;

        return {
            title:
                activeTr === key ? (
                    <Text
                        as="p"
                        className="title"
                        ellipsis={true}
                        color="white"
                    >
                        <Marquee speed={40} gradient={false}>
                            {title}
                        </Marquee>
                    </Text>
                ) : (
                    <Text
                        as="p"
                        className="title"
                        ellipsis={true}
                        color="white"
                    >
                        {title}
                    </Text>
                ),
            artist:
                activeTr === key ? (
                    <Flex alignItems="center">
                        <img src={artist.picture_small} alt="" />
                        <Text as="p" ellipsis={true} color="white">
                            <Marquee speed={40} gradient={false}>
                                {name}
                            </Marquee>
                        </Text>
                    </Flex>
                ) : (
                    <Flex alignItems="center">
                        <img src={artist.picture_small} alt="" />
                        <Text as="p" ellipsis={true} color="white">
                            {name}
                        </Text>
                    </Flex>
                ),
            album:
                activeTr === key ? (
                    <Flex alignItems="center">
                        <img src={album.cover_small} alt="" />
                        <Text as="p" ellipsis={true} color="white">
                            <Marquee speed={40} gradient={false}>
                                {album.title}
                            </Marquee>
                        </Text>
                    </Flex>
                ) : (
                    <Flex alignItems="center">
                        <img src={album.cover_small} alt="" />
                        <Text as="p" ellipsis={true} color="white">
                            {album.title}
                        </Text>
                    </Flex>
                ),

            lyric: (
                <button className="btn" onClick={() => getLyric(title, name)}>
                    <FiBook color={currentTheme.colors.white} size={30} />
                </button>
            ),

            onClick: () => setPlayIndex(key),
            styles: key === activeTr ? "active" : "",
        };
    });

    return (
        <TableStyles>
            <Table data={dados} columns={conlumn} />
        </TableStyles>
    );
}
