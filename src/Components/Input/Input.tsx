import { UseFormRegisterReturn } from 'react-hook-form';

type InputPropsType = {
  id: string;
  label: string;
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
  label,
  placeholder,
  type,
  errorMessage,
  register,
  className,
}: InputPropsType) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} {...register} placeholder={placeholder} type={type} />
      <p>{errorMessage}</p>
    </div>
  );
};
