import { Form } from 'react-router-dom';
import { Button, Input, SearchDiv } from './style';
import { useContext, useEffect, useState } from 'react';
import { HeaderLoader } from '../../type/type';
import { MyContext } from '../../Context/MyContext';

export const Search = () => {
  const { searchName, search } = useContext(MyContext) as HeaderLoader;
  const [query, setQuery] = useState(search.length > 0 ? search : searchName);

  useEffect(() => {
    setQuery(search);
  }, [search]);

  return (
    <SearchDiv>
      <div>
        <Form role="search">
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
