import { ContentContainer } from './style';
import { Outlet } from 'react-router-dom';
import { useHistory } from 'react-router-use-history';
import { Header } from '../../Components/Header/Header';
import { MouseEventHandler } from 'react';
import { Results } from '../../Components/Results/Results';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { setSearchValue } from '../../Slice/searchSlice';
import { setLocalStorages } from '../../Components/Storage/Storage';

export const Page = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { limit, page } = useSelector((state: RootState) => state.fetchArg);
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
  const search = new URLSearchParams(location.search).get('search');
  const pageUrl = new URLSearchParams(location.search).get('page');
  const limitUrl = new URLSearchParams(location.search).get('limit');

  if (search && search !== searchValue) {
    dispatch(setSearchValue(search));
    setLocalStorages('search', search);
  }
  if (pageUrl && pageUrl !== page) {
    dispatch(setSearchValue(pageUrl));
  }
  if (limitUrl && limitUrl !== limit) {
    dispatch(setSearchValue(limitUrl));
  }
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const targetElement = event.target as HTMLElement;

    if (targetElement && targetElement.id === 'left-page') {
      const newUrl = new URL(location.toString());
      history.push(`/${newUrl.search}`);
    }
  };

  return (
    <>
      <Header />
      <ContentContainer onClick={handleClick}>
        <Results />
        <Outlet />
      </ContentContainer>
    </>
  );
};
