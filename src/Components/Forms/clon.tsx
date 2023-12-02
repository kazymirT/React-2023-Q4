// import { yupResolver } from '@hookform/resolvers/yup';
// import { YupSchema, schema } from '../Yup/schema';
// import { useForm } from 'react-hook-form';
// import { Input } from '../Input/Input';

// export type IFormInput = {
//   name: string;
//   // age: number;
//   // email: string;
//   // password: string;
// };

// export const FormHook = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//     reset,
//   } = useForm({
//     resolver: yupResolver(schema),
//     // mode: 'onBlur',
//   });

//   const onSubmitHandler = (data: IFormInput) => {
//     console.log({ data });
//     reset();
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmitHandler)}>
//       <h2>Lets sign you in.</h2>
//       <br />
//       <Input
//         id={'form-name'}
//         type={'text'}
//         label={'Name'}
//         placeholder={'Name'}
//         register={register('name')}
//         errorMessage={errors.name?.message}
//       />
//       {errors.name && <p>{errors.name.message}</p>}
//       {/* <Input
//         id={'form-age'}
//         type={'number'}
//         label={'Age'}
//         placeholder={'Age'}
//         register={register('age')}
//         errorMessage={errors.age?.message}
//       />
//       <Input
//         id={'form-email'}
//         type={'email'}
//         label={'Email'}
//         placeholder={'Email'}
//         register={register('email')}
//         errorMessage={errors.email?.message}
//       />
//       <Input
//         id={'form-password'}
//         type={'password'}
//         label={'Password'}
//         placeholder={'Password'}
//         register={register('password')}
//         errorMessage={errors.password?.message}
//       />
//       <Input
//         id={'form-password-confirm'}
//         type={'password'}
//         label={'Password confirm'}
//         placeholder={'Password confirm'}
//         register={register('confirmPassword')}
//         errorMessage={errors.confirmPassword?.message}
//       />

//       <Input
//         id={'form-accept'}
//         type={'checkbox'}
//         label={'I agree to the terms of service'}
//         placeholder={'Password confirm'}
//         register={register('accept')}
//         errorMessage={errors.accept?.message}
//       />
//       <div style={{ display: 'flex' }}>
//         <Input
//           id={'form-male'}
//           type={'radio'}
//           label={'Male'}
//           name={'gender'}
//           register={register('accept')}
//           errorMessage={errors.accept?.message}
//         />

//         <Input
//           id={'form-female'}
//           type={'radio'}
//           label={'Female'}
//           name={'gender'}
//           register={register('accept')}
//           errorMessage={errors.accept?.message}
//         />
//       </div> */}

//       <input type="submit" value="Submit" />
//     </form>
//   );
// };
