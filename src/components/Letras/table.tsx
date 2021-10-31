import { Table, Flex, Text } from "aplication-yetz";
import { Music } from "../../Hook/UseLetras";
import { conlumn } from "./config";
import { Data } from "./types";
import { TableStyles } from "./styles";

interface TableProps {
    data: Music[];
    setModal: (modal: boolean) => void;
}

export function TableList(props: TableProps) {
    const { data } = props;

    function openLink(link: string) {
        window.open(link);
    }
    const dados: Data[] = data.map((item) => {
        const { artist, album, title, preview } = item;
        const { name } = artist;
        return {
            title: (
                <button onClick={() => openLink(preview)}>
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
        };
    });

    return (
        <TableStyles width="1200px" m="0 auto">
            <Table data={dados} columns={conlumn} />
        </TableStyles>
    );
}
