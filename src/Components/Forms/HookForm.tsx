import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../Yup/schema';
import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { setDataFormHook } from '../../Reduce/dataFormSlice';
import { useNavigate } from 'react-router-dom';
import { convertImage } from '../utils/convertImage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Reduce/store';
import InputPassword from '../Input/InputPassword';
import InputCountry from '../Input/InputCountry';
import { useState } from 'react';

export interface IForm {
  name?: string;
  age?: number;
  gender?: 'male' | 'female';
  country?: string;
  picture?: unknown | File;
  email?: string;
  password?: string;
  confirmPassword?: string;
  accept?: boolean;
}

export interface ISubmitForm extends IForm {
  picture: string;
}

export const FormHook = () => {
  const dispatch = useDispatch();
  const { dataFormHook } = useSelector((state: RootState) => state.dataForms);
  const navigate = useNavigate();
  const [countriesFilteredVisible, setCountriesFilteredVisible] =
    useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmitHandler = async (data: IForm) => {
    console.log(data.picture);
    console.log(data.picture);
    if (data.picture instanceof FileList) {
      const base64Image = await convertImage(data.picture[0]);
      const newData: ISubmitForm = { ...data, picture: base64Image };
      const newArrData: ISubmitForm[] = [newData, ...dataFormHook];
      dispatch(setDataFormHook(newArrData));
      navigate('/');
      console.log(data);
    } else {
      console.error('Invalid picture type');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="form">
      <h2>Lets sign you in.</h2>
      <Input
        className="input-group"
        id={'form-name'}
        type={'text'}
        label={''}
        placeholder={'Name'}
        register={register('name')}
        errorMessage={errors.name?.message}
      />
      <Input
        className="input-group"
        id={'form-email'}
        type={'email'}
        label={''}
        placeholder={'Email'}
        register={register('email')}
        errorMessage={errors.email?.message}
      />
      <InputPassword
        watchPassword={watch('password')}
        register={register}
        error={{
          errorPassword: errors.password?.message,
          errorPasswordRepeat: errors.confirmPassword?.message,
        }}
      />

      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '15px',
        }}
      >
        <Input
          className={'input-group-150'}
          id={'form-age'}
          type={'number'}
          label={''}
          placeholder={'Age'}
          register={register('age')}
          errorMessage={errors.age?.message}
        />
        <fieldset style={{ height: '72px' }}>
          <br />
          <legend>Gender:</legend>
          <label htmlFor="male">
            <input
              {...register('gender')}
              type="radio"
              id="male"
              name="gender"
              value="male"
            />
            Male
          </label>

          <label htmlFor="female">
            <input
              {...register('gender')}
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
            Female
          </label>
          {errors.gender && <p>{errors.gender.message}</p>}
        </fieldset>
      </div>

      <Input
        className={'input-group-150'}
        id={'form-accept'}
        type={'checkbox'}
        label={'I agree to the terms of service'}
        placeholder={'Password confirm'}
        register={register('accept')}
        errorMessage={errors.accept?.message}
      />

      <Input
        className="input-group"
        id={'form-picture'}
        type={'file'}
        label={'Picture'}
        register={register('picture')}
        errorMessage={errors.picture?.message}
      />

      <InputCountry
        countriesFilteredVisible={countriesFilteredVisible}
        setCountriesFilteredVisible={setCountriesFilteredVisible}
        register={register}
        watchCountry={watch('country')}
        setValue={setValue}
        error={errors.country?.message}
        setError={setError}
      />
      <input type="submit" disabled={!isValid} value="Submit" />
    </form>
  );
};
