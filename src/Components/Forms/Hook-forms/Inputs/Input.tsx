import { UseFormRegisterReturn } from 'react-hook-form';

type InputPropsType = {
  id: string;
  label?: string;
  placeholder?: string;
  type: string;
  className: string;
  errorMessage: string | undefined;
  register:
    | UseFormRegisterReturn<'name'>
    | UseFormRegisterReturn<'age'>
    | UseFormRegisterReturn<'email'>
    | UseFormRegisterReturn<'picture'>
    | UseFormRegisterReturn<'accept'>;
};

export const Input = ({
  id,
  placeholder,
  type,
  errorMessage,
  register,
  className,
  label,
}: InputPropsType) => {
  return (
    <div className={className}>
      {type === 'checkbox' ? (
        <label className="checkbox-label">
          {label}
          <input id={id} {...register} placeholder={placeholder} type={type} />
        </label>
      ) : (
        <input id={id} {...register} placeholder={placeholder} type={type} />
      )}
      <div className={'error-container'}>
        {errorMessage && <p className={'error-message'}>{errorMessage}</p>}
      </div>
    </div>
  );
};
