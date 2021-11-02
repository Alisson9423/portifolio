export interface Data {
    artist: string | React.ReactChild | React.ReactChild[] | React.ReactNode;
    title: string | React.ReactChild | React.ReactChild[] | React.ReactNode;
    album: string | React.ReactChild | React.ReactChild[] | React.ReactNode;
}

export interface AudioList {
    name: string;
    singer: string;
    cover: string;
    musicSrc: string;
}
