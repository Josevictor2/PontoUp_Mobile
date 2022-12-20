import * as yup from "yup";

export const ActionSchema = yup.object().shape({
    select: yup.string().test("", "Selecione uma opção",valor => valor! === "0"),
});