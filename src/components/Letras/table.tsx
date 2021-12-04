import { Table, Flex, Text } from "alisson-application";
import { Column } from "react-table";
import { useTranslation } from "../../contexts/Localization";
import { FiBook } from "react-icons/fi";
import { Music } from "../../Hook/UseMusic";
import { Data } from "./types";
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
    const width = window.screen.width;

    const conlumn: Column<Data>[] = [
        {
            Header: t("Titulo"),
            accessor: "title",
            width: 215,
            maxWidth: 215,
        },
        {
            Header: t("Artista"),
            accessor: "artist",
            width: 300,
            maxWidth: 300,
        },

        {
            Header: t("Album"),
            accessor: "album",
            width: 480,
            maxWidth: 480,
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
            title: (
                <button onClick={() => setPlayIndex(key)}>
                    <Text
                        as="p"
                        className="title"
                        ellipsis={true}
                        color="white"
                    >
                        {title}
                    </Text>
                </button>
            ),
            artist: (
                <Flex alignItems="center">
                    <img src={artist.picture_small} alt="" />
                    <Text as="p" ellipsis={true} color="white">
                        {name}
                    </Text>
                </Flex>
            ),
            album: (
                <Flex alignItems="center">
                    <img src={album.cover_small} alt="" />
                    <Text as="p" ellipsis={true} color="white">
                        {album.title}
                    </Text>
                </Flex>
            ),

            lyric: (
                <button className="btn" onClick={() => getLyric(title, name)}>
                    <FiBook color="white" size={30} />
                </button>
            ),

            styles: key === activeTr ? "active" : "",
        };
    });

    return (
        <TableStyles>
            <Table data={dados} columns={conlumn} />
        </TableStyles>
    );
}
