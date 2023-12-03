import { MutableRefObject } from 'react';

export default function InputGender({
  genderRef,
}: Record<'genderRef', MutableRefObject<HTMLInputElement | null>>) {
  return (
    <fieldset>
      <legend>Gender:</legend>
      <label htmlFor="male">
        <input
          type="radio"
          id="male"
          name="gender"
          ref={genderRef}
          value="male"
          defaultChecked
        />
        Male
      </label>

      <label htmlFor="female">
        <input
          type="radio"
          id="female"
          name="gender"
          ref={genderRef}
          value="female"
        />
        Female
      </label>
    </fieldset>
  );
}
