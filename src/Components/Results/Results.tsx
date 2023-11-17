import { ChildComponent } from '../ChildComponent/ChildComponents';
import { Items, PageControls, ResultsContainer } from './style';
import { NoResults } from '../NoResults';
import { Loader } from '../Loaders/Loader';
import { useGetProductsByNameQuery } from '../Api/getData';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { Select } from '../Select/Select';
import { Pagination } from '../Pagination/Pagination';

export const Results = () => {
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
  const { limit, page } = useSelector((state: RootState) => state.fetchArg);
  const skip: number = (Number(page) - 1) * Number(limit);

  const { data, isFetching } = useGetProductsByNameQuery({
    name: searchValue,
    limit: limit,
    page: String(skip),
  });

  return (
    <ResultsContainer>
      {isFetching && <Loader />}

      {data && data.products.length > 0 && (
        <>
          <PageControls>
            <Select />
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
