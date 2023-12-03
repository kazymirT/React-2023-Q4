import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ValidationError } from 'yup';
import { schema } from '../../Yup/schema';
import { convertImage } from '../../utils/convertImage';
import { showPasswordStrength } from '../../utils/showPassword';
import {
  removeValidationErrors,
  setValidationErrors,
} from '../../../Reduce/Slice/errorsSlice';
import { RootState } from '../../../Reduce/store';
import Input from './Inputs/Input';
import InputPassword from './Inputs/InputPassword';
import InputGender from './Inputs/InputGender';
import InputCountry from './Inputs/InputCountry';
import { setDataFormHook } from '../../../Reduce/Slice/dataFormSlice';
import { IForm, ISubmitForm } from '../../utils/type';

export function UncontrolledFormPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const { dataForms } = useSelector((state: RootState) => state.dataForms);
  const errorSlice = useSelector((state: RootState) => state.errorSlice);
  const { countries } = useSelector((state: RootState) => state.countriesSlice);

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [countriesFilteredVisible, setCountriesFilteredVisible] =
    useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data: IForm = {
      name: nameRef.current?.value[0],
      age: Number(ageRef.current?.value),
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: passwordRepeatRef.current?.value,
      accept: acceptRef.current?.checked,
      gender: genderRef.current?.value,
      picture: pictureRef.current?.files,
      country: countryRef.current?.value,
    };
    try {
      await schema.validate(data, { abortEarly: false });
      dispatch(removeValidationErrors());

      const image64 =
        pictureRef.current && pictureRef.current.files
          ? await convertImage(pictureRef.current.files[0])
          : '';

      const newData: ISubmitForm = {
        ...data,
        picture: image64,
        name: nameRef.current?.value,
      };
      const newArrData: ISubmitForm[] = [newData, ...dataForms];
      dispatch(setDataFormHook(newArrData));
      setTimeout(() => navigate('/'), 1000);
    } catch (e: unknown) {
      if (e instanceof ValidationError) {
        dispatch(setValidationErrors(e.inner));
      }
    } finally {
      showPasswordStrength(passwordRef.current?.value || '').then(
        (strength) => {
          setPasswordStrength(strength);
        }
      );
    }
  };

  return (
    <section
      onClick={(e) => {
        if (e.target !== countryRef.current) {
          setCountriesFilteredVisible(false);
        }
      }}
    >
      <form
        className="form"
        action=""
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h2 className={'form-title'}>Lets sign you in.</h2>

        <Input
          inputRef={nameRef}
          id={'form-name'}
          errorName={errorSlice.name}
          type={'name'}
          className={'input-group'}
          label={'Name'}
        />

        <Input
          inputRef={emailRef}
          id={'form-email'}
          errorName={errorSlice.email}
          type={'email'}
          className={'input-group'}
          label={'Email'}
        />
        <InputPassword
          passwordError={errorSlice.password}
          passwordConfirmError={errorSlice.confirmPassword}
          passwordRef={passwordRef}
          passwordRepeatRef={passwordRepeatRef}
          strength={passwordStrength}
        />
        <InputCountry
          inputRef={countryRef}
          countryError={errorSlice.country}
          allCountry={countries}
          countriesFilteredVisible={countriesFilteredVisible}
          setCountriesFilteredVisible={setCountriesFilteredVisible}
        />
        <Input
          inputRef={ageRef}
          id={'form-age'}
          errorName={errorSlice.age}
          type={'number'}
          className={'input-group'}
          label={'Age'}
        />

        <InputGender genderRef={genderRef} />
        <Input
          inputRef={acceptRef}
          id={'form-accept'}
          label={'I agree to the terms of service'}
          errorName={errorSlice.accept}
          type={'checkbox'}
          className={'input-group'}
        />
        <label
          htmlFor="form-picture"
          style={{ paddingLeft: '8px', width: '440px' }}
        >
          Picture
          <Input
            inputRef={pictureRef}
            id={'form-picture'}
            label={'Picture'}
            errorName={errorSlice.picture}
            type={'file'}
            className={'input-group'}
          />
        </label>

        <input type="submit" className={'form-submit'} value="Submit" />
      </form>
    </section>
  );
}

export default UncontrolledFormPage;
