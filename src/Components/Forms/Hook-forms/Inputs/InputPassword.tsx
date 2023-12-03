import { useEffect, useState } from 'react';
import { showPasswordStrength } from '../../../utils/showPassword';
import { UseFormRegister } from 'react-hook-form';
import { IForm } from '../../../utils/type';
import { ProgressBar } from '../../../ProgressBar';

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
        <div style={{ height: '10px' }}>
          <ProgressBar strength={strength} />
        </div>
        <input
          type="password"
          placeholder="Password"
          id="password"
          {...register('password')}
        />
        <div className={'error-container'}>
          {errorPassword && <p className={'error-message'}>{errorPassword}</p>}
        </div>
      </div>

      <div className="input-group">
        <input
          type="password"
          id="password-confirm"
          placeholder="Confirm password"
          {...register('confirmPassword')}
        />
        <div className={'error-container'}>
          {errorPasswordRepeat && (
            <p className={'error-message'}>{errorPasswordRepeat}</p>
          )}
        </div>
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
