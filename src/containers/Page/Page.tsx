import { ContentContainer } from './style';
import {
  LoaderFunctionArgs,
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import { Content } from '../../Components/Content/Content';
import {
  getLocalStorages,
  setLocalStorages,
} from '../../Components/Storage/Storage';
import { Header } from '../../Components/Header/Header';
import { Loader } from '../../Components/Loader/Loader';
import { getDate } from '../../Components/Api/getData';
import { PageLoader, ProductResponse } from '../../type/type';
import { MouseEventHandler } from 'react';
import { useHistory } from 'react-router-use-history';
import { MyContextProvider } from '../../Context/MyContext';

export async function loader(params: LoaderFunctionArgs<unknown>) {
  const searchName = getLocalStorages('search');
  const request = getLocalStorages('request');
  const url = new URL(params.request.url);
  const search = url.searchParams.get('search') || '';
  const limit = url.searchParams.get('limit') || '';
  const page = url.searchParams.get('page') || '';

  if (search.length === 0) {
    setLocalStorages('request', '1');
    return redirect(
      `/?search=${request === '1' ? ' ' : searchName}&limit=5&page=1`
    );
  } else {
    setLocalStorages('search', search);
  }
  const data: ProductResponse = await getDate(search, limit, page);
  return { searchName, search, data, url };
}

export const Page = () => {
  const navigation = useNavigation();
  const history = useHistory();
  const { url, data, search, searchName } = useLoaderData() as PageLoader;

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const targetElement = event.target as HTMLElement;

    if (targetElement && targetElement.id === 'left-page') {
      const newUrl = url.search;
      history.push(`/${newUrl}`);
    }
  };

  return (
    <>
      <MyContextProvider value={{ url, data, search, searchName }}>
        <Header />
        <ContentContainer onClick={handleClick}>
          <Content />
          {navigation.state === 'loading' ? <Loader /> : ''}
          <Outlet />
        </ContentContainer>
      </MyContextProvider>
    </>
  );
};
