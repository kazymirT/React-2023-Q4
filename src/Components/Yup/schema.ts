import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter'),
  age: yup
    .number()
    .required('Age is a required field')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
  gender: yup
    .string()
    .oneOf(['male', 'female'])
    .required('Choose the gender, this is required'),
  country: yup.string().required('Country is a required field'),
  picture: yup
    .mixed<FileList>()
    .test('extension', 'Image is required', (value) => {
      return value?.length == 1;
    })
    .test('fileSize', 'The image size must be up to 200 kB', (file) => {
      if (!file?.length) return false;
      return file[0].size <= 204800;
    })
    .test('extension', 'The image must be in PNG or JPEG format', (file) => {
      if (!file?.length) return false;
      return file[0].type == 'image/png' || file[0].type === 'image/jpeg';
    }),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required('This is a required field')
    .matches(/^(?=.*[a-zа-я])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-ZА-Я])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(
      /^(?=.*[!@#%&$^*()?><|+=])/,
      'Must contain at least one special character'
    ),
  confirmPassword: yup
    .string()
    .required('This is a required field')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  accept: yup.boolean().test({
    name: 'accepted',
    message: 'You must accept the terms and conditions',
    test: (value) => value === true,
  }),
});
