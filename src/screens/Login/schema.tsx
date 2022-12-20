import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    password: yup.string().required("O campo senha é obrigatório"),
});