import { MutableRefObject } from 'react';

export type InputsPropsType = {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  errorName: string;
  id: string;
  type: string;
  className: string;
  label: string;
};
export default function Input({
  inputRef,
  errorName,
  id,
  type,
  className,
  label,
}: InputsPropsType) {
  return (
    <div className={className}>
      {type === 'checkbox' ? (
        <label className="checkbox-label">
          {label}
          <input type={type} id={id} ref={inputRef} placeholder={label} />
        </label>
      ) : (
        <input type={type} id={id} ref={inputRef} placeholder={label} />
      )}
      <div className={'error-container'}>
        {errorName && <p className={'error-message'}>{errorName}</p>}
      </div>
    </div>
  );
}
