import * as yup from 'yup';

export const loanValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  interest_rate: yup.number().integer().required(),
  duration: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
