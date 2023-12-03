import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Register } from './InputPassword';
import { RootState } from '../../../../Reduce/store';
import {
  UseFormSetError,
  UseFormSetValue,
  UseFormTrigger,
} from 'react-hook-form';
import { IForm } from '../../../utils/type';

export type SetValue = UseFormSetValue<IForm>;
export type SetError = UseFormSetError<IForm>;
export type Trigger = UseFormTrigger<IForm>;

interface Props {
  countriesFilteredVisible: boolean;
  setCountriesFilteredVisible: React.Dispatch<React.SetStateAction<boolean>>;
  register: Register;
  watchCountry: string | undefined;
  setValue: SetValue;
  error: string | undefined;
  trigger: Trigger;
}

export default function InputCountry({
  register,
  watchCountry,
  setValue,
  error,
  trigger,
  countriesFilteredVisible,
  setCountriesFilteredVisible,
}: Props) {
  const counriesAll = useSelector(
    (state: RootState) => state.countriesSlice.countries
  );

  const countryRegister = register('country');
  const [countriesFiltered, setCountriesFiltered] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountriesFilteredVisible(true);
    setCountriesFiltered(
      counriesAll.filter((country) =>
        country.toLowerCase().startsWith(e.target.value?.toLowerCase() || '')
      )
    );
  };

  return (
    <div className="input-group input-country">
      <input
        type="text"
        id="country"
        className="bg-red-600"
        placeholder="Country"
        {...countryRegister}
        onChange={(e) => {
          countryRegister.onChange(e);
          handleChange(e);
        }}
        onFocus={() => setCountriesFilteredVisible(true)}
      />
      {countriesFilteredVisible && watchCountry && (
        <div className="country-container">
          {countriesFiltered.map((country) => (
            <label
              htmlFor="country"
              key={country}
              className={'counter-label'}
              onClick={() => {
                setValue('country', country);
                setCountriesFiltered([]);
                trigger('country');
              }}
            >
              {country}
            </label>
          ))}
        </div>
      )}
      <div className={'error-container'}>
        {error && <p className={'error-message'}>{error}</p>}
      </div>
    </div>
  );
}
