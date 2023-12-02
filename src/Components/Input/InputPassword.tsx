import { useEffect, useState } from 'react';
import { showPasswordStrength } from '../utils/showPassword';
import { UseFormRegister } from 'react-hook-form';
import { IForm } from '../Forms/HookForm';

export type Register = UseFormRegister<IForm>;

type FormHookPasswordsProps = {
  register: Register;
  watchPassword: string | undefined;
  error: {
    errorPassword: string | undefined;
    errorPasswordRepeat: string | undefined;
  };
};

export default function InputPassword(props: FormHookPasswordsProps) {
  const {
    register,
    watchPassword,
    error: { errorPassword, errorPasswordRepeat },
  } = props;

  const [strength, setStrength] = useState(0);

  useEffect(() => {
    if (watchPassword)
      showPasswordStrength(watchPassword).then((strength) => {
        setStrength(strength);
      });
  }, [watchPassword]);

  return (
    <>
      <div className="input-group">
        <label htmlFor="password"></label>
        <br />
        <input
          type="password"
          placeholder="Password"
          id="password"
          {...register('password')}
        />
        <p>{errorPassword ? errorPassword : ''}</p>
        {strength ? <div>Strength: {strength} of 4</div> : <></>}
      </div>

      <div className="input-group">
        <label htmlFor="password-confirm"></label>
        <br />
        <input
          type="password"
          id="password-confirm"
          placeholder="Confirm password"
          {...register('confirmPassword')}
        />
        <p>{errorPasswordRepeat ? errorPasswordRepeat : ''}</p>
      </div>
    </>
  );
}

{
  /* <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} {...register} placeholder={placeholder} type={type} />
      <p>{errorMessage}</p>
    </div> */
}
