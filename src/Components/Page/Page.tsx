import { useState } from 'react';
import { Content } from '../Content';
import { Header } from '../Header/Header';
import { PageState } from '../../type/type';

export const Page = () => {
  const [state, setState] = useState<PageState>({ searchValue: null });

  const handleSearchInputChange = (value: string) => {
    if (value !== state.searchValue) {
      setState({ searchValue: value });
    }
  };

  return (
    <div>
      <div>
        <Header onClick={handleSearchInputChange} />
        <Content data={state.searchValue} />
      </div>
    </div>
  );
};
