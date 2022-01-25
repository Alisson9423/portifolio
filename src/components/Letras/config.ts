import * as Yup from "yup";

export interface MyFormValues {
    search: string;
}

export const initialValues: MyFormValues = {
    search: "",
};

export const validation = Yup.object().shape({
    search: Yup.string().required("campo obrigatório"),
});
