import { Button, Input, SearchDiv } from './style';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../Slice/searchSlice';
import { RootState } from '../../Store/store';
import { setLocalStorages } from '../Storage/Storage';
import { updatePage } from '../../Slice/fetchArgSlice';
import { useHistory } from 'react-router-use-history';

export const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
  const [query, setQuery] = useState(searchValue);

  useEffect(() => {
    setQuery(searchValue);
  }, [searchValue]);

  const updateUrlPage = useCallback(
    (newSearch: string) => {
      const newUrl = new URL(location.toString());
      newUrl.searchParams.set('search', `${newSearch}`);
      history.push(newUrl.search);
    },
    [history]
  );

  const handlerSubmit = useCallback(
    (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(setSearchValue(query));
      dispatch(updatePage({ page: '1' }));
      setLocalStorages('search', query);
      updateUrlPage(query);
    },
    [dispatch, query, updateUrlPage]
  );

  return (
    <SearchDiv>
      <div>
        <form role="search" onSubmit={handlerSubmit}>
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
        </form>
      </div>
    </SearchDiv>
  );
};
