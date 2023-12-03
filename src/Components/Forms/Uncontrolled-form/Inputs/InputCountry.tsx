import { MutableRefObject, useState } from 'react';

interface Props {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  countriesFilteredVisible: boolean;
  allCountry: string[];
  countryError: string;
  setCountriesFilteredVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InputCountry({
  inputRef,
  countriesFilteredVisible,
  allCountry,
  countryError,
  setCountriesFilteredVisible,
}: Props) {
  const [countriesFiltered, setCountriesFiltered] = useState<string[]>([]);

  const handleChange = () => {
    setCountriesFilteredVisible(true);
    setCountriesFiltered(
      allCountry.filter((country) =>
        country
          .toLowerCase()
          .startsWith(inputRef.current?.value?.toLowerCase() || '')
      )
    );
  };

  return (
    <>
      <div className="input-group input-country">
        <input
          type="text"
          id="country"
          ref={inputRef}
          onChange={handleChange}
          placeholder="Country"
        />
        {countriesFilteredVisible && (
          <div className="country-container">
            {countriesFiltered.map((country) => (
              <label
                htmlFor="country"
                key={country}
                className={'counter-label'}
                onClick={() => {
                  if (inputRef.current) inputRef.current.value = country;
                  setCountriesFiltered([]);
                }}
              >
                {country}
              </label>
            ))}
          </div>
        )}
        <div className={'error-container'}>
          {countryError && <p className={'error-message'}>{countryError}</p>}
        </div>
      </div>
    </>
  );
}
