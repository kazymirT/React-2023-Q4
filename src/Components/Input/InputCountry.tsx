import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Register } from './InputPassword';
import { RootState } from '../../Reduce/store';
import { UseFormSetError, UseFormSetValue } from 'react-hook-form';
import { IForm } from '../Forms/HookForm';

export type SetValue = UseFormSetValue<IForm>;
export type SetError = UseFormSetError<IForm>;

interface Props {
  countriesFilteredVisible: boolean;
  setCountriesFilteredVisible: React.Dispatch<React.SetStateAction<boolean>>;
  register: Register;
  watchCountry: string | undefined;
  setValue: SetValue;
  error: string | undefined;
  setError: SetError;
}

export default function InputCountry(props: Props) {
  const {
    register,
    watchCountry,
    setValue,
    error,
    setError,
    countriesFilteredVisible,
    setCountriesFilteredVisible,
  } = props;

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
    <div className="input-group">
      <label htmlFor="country"></label>
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
      {countriesFilteredVisible &&
        watchCountry &&
        countriesFiltered.map((country) => (
          <label
            htmlFor="country"
            key={country}
            className="flex flex-col"
            onClick={() => {
              setValue('country', country);
              setError('country', { type: 'no-error', message: '' });
              setCountriesFiltered([]);
            }}
          >
            {country}
          </label>
        ))}
      <p>{error ? error : ''}</p>
    </div>
  );
}
