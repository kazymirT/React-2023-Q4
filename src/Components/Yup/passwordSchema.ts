import { object, string } from 'yup';

export const passwordSchema = object({
  password: string()
    .required('This is a required field')
    .matches(/^(?=.*[a-zа-я])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-ZА-Я])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(
      /^(?=.*[!@#%&$^*()?><|+=])/,
      'Must contain at least one special character'
    ),
});
