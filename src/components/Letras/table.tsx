import { Table, Flex, Text } from "aplication-yetz";
import { Music } from "../../Hook/UseLetras";
import { conlumn } from "./config";
import { Data } from "./types";
import { TableStyles } from "./styles";

interface TableProps {
    data: Music[];
}

export function TableList(props: TableProps) {
    const { data } = props;

    function openLink(link: string) {
        window.open(link);
    }
    const dados: Data[] = data.map((item) => {
        const { artist, album, title, link, preview } = item;
        const { name } = artist;
        return {
            title: (
                <button onClick={() => openLink(preview)}>
                    <Text color="white">{title}</Text>
                </button>
            ),
            artist: (
                <Flex>
                    <img src={artist.picture_small} alt="" />
                    <button onClick={() => openLink(link)}>
                        <Text color="white">{name}</Text>
                    </button>
                </Flex>
            ),
            album: (
                <Flex alignItems="center">
                    <img src={album.cover_small} alt="" />
                    <button onClick={() => openLink(link)}>
                        <Text color="white">{album.title}</Text>
                    </button>
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
