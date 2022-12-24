import * as yup from "yup";

export const ActionSchema = yup.object().shape({
  select: yup.string().required("Selecione uma opção"),
  initDate: yup.date().required("Informe uma data"),
});
