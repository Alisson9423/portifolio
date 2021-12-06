import * as Yup from "yup";

export interface MyFormValues {
    search: string;
}

export const initialValues: MyFormValues = {
    search: "50 cent",
};

export const validation = Yup.object().shape({
    search: Yup.string().required("campo obrigatório"),
});
