import { useLetras } from "../../Hook/UseLetras";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";

import { initialValues, validation, MyFormValues } from "./config";
import { TableList } from "./table";

import { Container, HeaderStyles, Form } from "./styles";

export function Letras() {
    const { fetchSongs, music } = useLetras();

    return (
        <Container>
            <HeaderStyles>
                <h1>Busca letras</h1>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validation}
                    onSubmit={(values, actions) => {
                        const { search } = values;

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

            {console.log(music)}

            {music.length ? <TableList data={music} /> : null}
            {/* <ul id="songs-container" className="songs-container songs">
                {music.map((item) => (
                    <li className="song">
                        <span className="song-artist">
                            <strong>{item.artist.name}</strong> - {item.title}
                        </span>
                    </li>
                ))}
            </ul> */}

            <div
                id="prev-and-next-container"
                className="prev-and-next-container"
            ></div>
        </Container>
    );
}
