import { Button, Input, SearchDiv } from './style';
import React, { useEffect, useState } from 'react';
import { SearchProps, SearchState } from '../../type/type';
import { getLocalStorages, setLocalStorages } from '../Storage/Storage';
import { useLocation, useNavigate } from 'react-router-dom';

export const Search = (props: SearchProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState<SearchState>({ value: '' });
  const { onClick } = props;
  const [hasRunEffect, setHasRunEffect] = useState(false);

  useEffect(() => {
    if (!hasRunEffect) {
      const search: string = getLocalStorages('search');

      if (typeof search === 'string') {
        navigate(`?search=${search}`);
        onClick(search);
        setState({ value: search });
      }
      setHasRunEffect(true);
    }
  }, [onClick, hasRunEffect, navigate, location.search]);

  useEffect(() => {
    const search: string = getLocalStorages('search');
    const queryParams = new URLSearchParams(location.search).get('search');
    if (search !== queryParams && typeof queryParams === 'string') {
      setState({ value: queryParams });
      navigate(`?search=${queryParams}`);
      onClick(queryParams);
      setLocalStorages('search', queryParams);
    }
  }, [location.search, navigate, onClick]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ value: event.target.value });
  };

  const handleCommonAction = (value: string) => {
    navigate(`?search=${value}`);
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
