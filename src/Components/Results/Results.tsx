import { ChildComponent } from '../ChildComponent/ChildComponents';
import { Items, PageControls, ResultsContainer } from './style';
import { NoResults } from '../NoResults';
import { Loader } from '../Loaders/Loader';
import { useGetProductsByNameQuery } from '../Api/getData';
import { RootState } from '../../Store/store';
import { Select } from '../Select/Select';
import { Pagination } from '../Pagination/Pagination';
import { useHistory } from 'react-router-use-history';
import { useDispatch, useSelector } from 'react-redux';
import { updateLimit, updatePage } from '../../Slice/fetchArgSlice';
export const Results = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
  const { limit, page } = useSelector((state: RootState) => state.fetchArg);
  const skip: number = (Number(page) - 1) * Number(limit);

  const { data, isFetching } = useGetProductsByNameQuery({
    name: searchValue,
    limit: limit,
    page: String(skip),
  });

  const updateUrlParams = (newLimit: string, newPage: string) => {
    const newUrl = new URL(location.toString());
    newUrl.searchParams.set('limit', newLimit);
    newUrl.searchParams.set('page', newPage);
    history.push(newUrl.search);
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value;

    if (newLimit !== limit) {
      dispatch(updatePage({ page: '1' }));
      dispatch(updateLimit({ limit: newLimit }));
      updateUrlParams(newLimit, '1');
    }
  };
  return (
    <ResultsContainer>
      {isFetching && <Loader />}

      {data && data.products.length > 0 && (
        <>
          <PageControls>
            <Select limit={limit} onChange={handleSelectChange} />
            <Pagination />
          </PageControls>

          <Items id="left-page">
            {data.products.map((item) => (
              <ChildComponent key={item.id} data={item} />
            ))}
          </Items>
        </>
      )}

      {!isFetching && data?.products.length === 0 && <NoResults />}
    </ResultsContainer>
  );
};
