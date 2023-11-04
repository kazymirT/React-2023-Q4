import { Button, Input, SearchDiv } from './style';
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

      if (typeof search === 'string') {
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
    <SearchDiv>
      <div>
        <form onSubmit={handleOnClick} onReset={handleOnReset}>
          <Input value={state.value} onChange={handleInputChange} type="text" />
          <Button type="submit">Search</Button>
          <Button type="reset">Reset</Button>
        </form>
      </div>
    </SearchDiv>
  );
};
