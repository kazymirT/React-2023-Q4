import { ChildComponent } from '../ChildComponent/ChildComponents';
import { Items, PageControls, ResultsContainer } from './style';
import { NoResults } from '../NoResults';
import { Loader } from '../Loader/Loader';
import { useGetProductsByNameQuery } from '../Api/getData';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { updateTotal } from '../../Slice/fetchArgSlice';
import { Select } from '../Select/Select';
import { Pagination } from '../Pagination/Pagination';
import { useEffect } from 'react';

export const Results = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
  const { limit, page } = useSelector((state: RootState) => state.fetchArg);
  const skip: number = (Number(page) - 1) * Number(limit);
  const { data, isFetching } = useGetProductsByNameQuery({
    name: searchValue,
    limit: limit,
    page: String(skip),
  });

  useEffect(() => {
    if (data && data.total) {
      dispatch(updateTotal({ total: data.total }));
    }
  }, [data, dispatch]);

  return (
    <ResultsContainer>
      {isFetching && <Loader />}
      {data?.products.length ? (
        <>
          <PageControls>
            <Select />
            <Pagination />
          </PageControls>

          <Items id="left-page">
            {data.products.map((e) => (
              <ChildComponent key={e.id} data={e} />
            ))}
          </Items>
        </>
      ) : (
        <NoResults />
      )}
    </ResultsContainer>
  );
};
