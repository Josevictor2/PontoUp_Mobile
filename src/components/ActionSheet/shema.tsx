import * as yup from 'yup';

export const ActionSchema = yup.object().shape({
  select: yup.string().required('Selecione uma opção'),
  initDate: yup.date(),
  initEnd: yup.date().required('Informe a data final'),
});
