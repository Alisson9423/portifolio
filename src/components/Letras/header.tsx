import { useLetras } from "../../Hook/UseLetras";
import { initialValues, validation, MyFormValues } from "./config";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import { AudioList } from "./types";
import { HeaderStyles, Form } from "./styles";

interface HeaderProps {
    setAudioList: (list: AudioList[]) => void;
    setActiveTr: (index: number) => void;
    setPlayIndex: (index: number) => void;
}

export function Header(props: HeaderProps) {
    const { setActiveTr, setAudioList, setPlayIndex } = props;
    const { fetchSongs } = useLetras();

    return (
        <HeaderStyles>
            <h1>Busca letras</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={(values, actions) => {
                    const { search } = values;
                    setAudioList([]);
                    setActiveTr(0);
                    setPlayIndex(0);

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
    );
}
