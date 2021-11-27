import { Table, Flex, Text } from "alisson-application";
import { FiBook } from "react-icons/fi";
import { Music } from "../../Hook/UseMusic";
import { conlumn } from "./config";
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

    const dados: Data[] = data.map((item, key) => {
        const { artist, album, title } = item;
        const { name } = artist;
        return {
            title: (
                <button onClick={() => setPlayIndex(key)}>
                    <Text color="white">{title}</Text>
                </button>
            ),
            artist: (
                <Flex alignItems="center">
                    <img src={artist.picture_small} alt="" />
                    <Text color="white">{name}</Text>
                </Flex>
            ),
            album: (
                <Flex alignItems="center">
                    <img src={album.cover_small} alt="" />
                    <Text color="white">{album.title}</Text>
                </Flex>
            ),

            lyric: (
                <button onClick={() => getLyric(title, name)}>
                    <FiBook color="white" size={30} />
                </button>
            ),

            styles: key === activeTr ? "active" : "",
        };
    });

    return (
        <TableStyles width="1200px" m="0 auto">
            <Table data={dados} columns={conlumn} />
        </TableStyles>
    );
}
