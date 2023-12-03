import { MutableRefObject } from 'react';
import { ProgressBar } from '../../../ProgressBar';

interface Props {
  passwordRef: MutableRefObject<HTMLInputElement | null>;
  passwordRepeatRef: MutableRefObject<HTMLInputElement | null>;
  passwordError: string;
  passwordConfirmError: string;
  strength: number;
}

export default function InputPassword(props: Props) {
  const {
    passwordRef,
    passwordRepeatRef,
    strength,
    passwordError,
    passwordConfirmError,
  } = props;

  const starsArr = new Array(4)
    .fill(false)
    .map((_, ind) => {
      if (ind < strength) return true;
      return false;
    })
    .filter((e) => e === true).length;
  return (
    <>
      <div className="input-group">
        <div style={{ height: '10px' }}>
          {starsArr ? <ProgressBar strength={starsArr} /> : <></>}
        </div>
        <input
          type="password"
          id="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <div className={'error-container'}>
          {passwordError && <p className={'error-message'}>{passwordError}</p>}
        </div>
      </div>

      <div className="input-group">
        <input
          type="password"
          id="password-confirm"
          placeholder="Confirm password"
          ref={passwordRepeatRef}
        />
        <div className={'error-container'}>
          {passwordConfirmError && (
            <p className={'error-message'}>{passwordConfirmError}</p>
          )}
        </div>
      </div>
    </>
  );
}
