import './style.css';
import React, { useEffect, useState } from 'react';
import { SearchProps, SearchState } from '../../type/type';
import { getLocalStorages, setLocalStorages } from '../Storage/Storage';

export const Search = (props: SearchProps) => {
  const [state, setState] = useState<SearchState>({ value: '' });
  const { onClick } = props;
  const [hasRunEffect, setHasRunEffect] = useState(false);

  useEffect(() => {
    if (!hasRunEffect) {
      const search: string = getLocalStorages('search');

      if (search) {
        onClick(search);
        setState({ value: search });
      }
      setHasRunEffect(true);
    }
  }, [onClick, hasRunEffect]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ value: event.target.value });
  };

  const handleCommonAction = (value: string) => {
    onClick(value);
    setLocalStorages('search', value);
  };

  const handleOnClick = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCommonAction(state.value);
  };

  const handleOnReset = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    await setState({ value: '' });
    handleCommonAction('');
  };

  return (
    <div className="search">
      <div>
        <form onSubmit={handleOnClick} onReset={handleOnReset}>
          <input value={state.value} onChange={handleInputChange} type="text" />
          <button type="submit">Search</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    </div>
  );
};
