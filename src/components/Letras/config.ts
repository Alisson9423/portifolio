import * as Yup from "yup";
import { Column } from "react-table";
import { Data } from "./types";

export const conlumn: Column<Data>[] = [
    {
        Header: "Titulo",
        accessor: "title",
    },
    {
        Header: "Artista",
        accessor: "artist",
    },

    {
        Header: "Album",
        accessor: "album",
    },
];

export interface MyFormValues {
    search: string;
}

export const initialValues: MyFormValues = {
    search: "",
};

export const validation = Yup.object().shape({
    search: Yup.string().required("campo obrigatório"),
});
