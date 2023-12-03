import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../Yup/schema';
import { useForm } from 'react-hook-form';
import { Input } from './Inputs/Input';
import { setDataFormHook } from '../../../Reduce/Slice/dataFormSlice';
import { useNavigate } from 'react-router-dom';
import { convertImage } from '../../utils/convertImage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Reduce/store';
import InputPassword from './Inputs/InputPassword';
import InputCountry from './Inputs/InputCountry';
import { useState } from 'react';
import { IForm, ISubmitForm } from '../../utils/type';

export const FormHook = () => {
  const dispatch = useDispatch();
  const { dataForms } = useSelector((state: RootState) => state.dataForms);
  const navigate = useNavigate();
  const [countriesFilteredVisible, setCountriesFilteredVisible] =
    useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmitHandler = async (data: IForm) => {
    if (data.picture instanceof FileList) {
      const base64Image = await convertImage(data.picture[0]);
      const newData: ISubmitForm = { ...data, picture: base64Image };
      const newArrData: ISubmitForm[] = [newData, ...dataForms];
      dispatch(setDataFormHook(newArrData));
      navigate('/');
    } else {
      console.error('Invalid picture type');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} noValidate className="form">
      <h2 className={'form-title'}>Lets sign you in.</h2>
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
      <InputCountry
        countriesFilteredVisible={countriesFilteredVisible}
        setCountriesFilteredVisible={setCountriesFilteredVisible}
        register={register}
        watchCountry={watch('country')}
        setValue={setValue}
        trigger={trigger}
        error={errors.country?.message}
      />

      <Input
        className={'input-group'}
        id={'form-age'}
        type={'number'}
        label={''}
        placeholder={'Age'}
        register={register('age')}
        errorMessage={errors.age?.message}
      />
      <fieldset>
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

      <Input
        className={'input-group'}
        id={'form-accept'}
        type={'checkbox'}
        label={'I agree to the terms of service'}
        placeholder={''}
        register={register('accept')}
        errorMessage={errors.accept?.message}
      />
      <label
        htmlFor="form-picture"
        style={{ paddingLeft: '8px', width: '440px' }}
      >
        Picture
        <Input
          className="input-group"
          id={'form-picture'}
          type={'file'}
          label={'Picture'}
          register={register('picture')}
          errorMessage={errors.picture?.message}
        />
      </label>
      <input
        type="submit"
        disabled={!isValid}
        className={'form-submit'}
        value="Submit"
      />
    </form>
  );
};
