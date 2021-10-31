import { useEffect, useState } from "react";

import { useLetras } from "../../Hook/UseLetras";
import { Loader } from "../Loader";
import { Modal } from "../Modal";
import { Letra } from "./letra";
import { Player } from "../Player";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";

import { initialValues, validation, MyFormValues } from "./config";
import { TableList } from "./table";

import { Container, HeaderStyles, Form } from "./styles";

interface AudioList {
    name: string;
    singer: string;
    cover: string;
    musicSrc: string;
}

export function Letras() {
    const { fetchSongs, music, loader } = useLetras();
    const [modal, setModal] = useState<boolean>(false);
    const [audioList, setAudioList] = useState<AudioList[]>([]);

    useEffect(() => {
        const audioList = music.map((item) => {
            return {
                name: item.title,
                singer: item.artist.name,
                cover: item.album.cover_big,
                musicSrc: item.preview,
            };
        });
        setAudioList(audioList);
    }, [music]);

    return (
        <Container>
            <HeaderStyles>
                <h1>Busca letras</h1>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validation}
                    onSubmit={(values, actions) => {
                        const { search } = values;
                        setAudioList([]);

                        fetchSongs(search.trim());
                    }}
                >
                    {(props: FormikProps<MyFormValues>) => {
                        return (
                            <Form id="form">
                                <Field
                                    id="search"
                                    type="text"
                                    placeholder="Insira o nome do artista ou da música..."
                                    name="search"
                                />
                                <ErrorMessage component="span" name="search" />

                                <button>Buscar</button>
                            </Form>
                        );
                    }}
                </Formik>
            </HeaderStyles>

            {music.length && loader === false ? (
                <TableList data={music} setModal={setModal} />
            ) : loader ? (
                <Loader height={300} width={300} />
            ) : null}

            <div
                id="prev-and-next-container"
                className="prev-and-next-container"
            ></div>

            {audioList.length && <Player audioList={audioList} />}
            <Modal component={Letra} active={modal} />
        </Container>
    );
}
