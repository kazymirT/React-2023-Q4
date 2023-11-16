import { Form } from 'react-router-dom';
import { Button, Input, SearchDiv } from './style';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../Slice/searchSlice';
import { RootState } from '../../Store/store';
import { setLocalStorages } from '../Storage/Storage';
import { updatePage } from '../../Slice/fetchArgSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
  const [query, setQuery] = useState(searchValue);

  useEffect(() => {
    setQuery(searchValue);
  }, [searchValue]);

  const handlerSubmit = useCallback(() => {
    dispatch(setSearchValue(query));
    dispatch(updatePage({ page: '1' }));
    setLocalStorages('search', query);
  }, [dispatch, query]);

  return (
    <SearchDiv>
      <div>
        <Form role="search" onSubmit={handlerSubmit}>
          <Input
            type="text"
            name="search"
            value={query.trim()}
            placeholder="What product are you looking for?"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Button type="submit">Search</Button>
        </Form>
      </div>
    </SearchDiv>
  );
};
