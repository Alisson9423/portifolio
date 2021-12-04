import { useMusic } from "../../Hook/UseMusic";
import { useTranslation } from "../../contexts/Localization";
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
    const { fetchSongs } = useMusic();
    const { t } = useTranslation();

    return (
        <HeaderStyles>
            <h1>{t("Busca letras")}</h1>
            <div className="container">
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
                                    placeholder={t(
                                        "Insira o nome do artista ou da música..."
                                    )}
                                    name="search"
                                />
                                <ErrorMessage component="span" name="search" />

                                <button>{t("Buscar")}</button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </HeaderStyles>
    );
}
