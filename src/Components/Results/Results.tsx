import { ChildComponent } from '../ChildComponent/ChildComponents';
import { Select } from '../Select/Select';
import { Pagination } from '../Pagination/Pagination';
import { Items, PageControls, ResultsContainer } from './style';
import { useLoaderData } from 'react-router-dom';
import { NoResults } from '../NoResults';
import { ResultsLoader } from '../../type/type';

export const Results = () => {
  const { data } = useLoaderData() as ResultsLoader;

  return (
    <ResultsContainer>
      {data.products.length ? (
        <>
          <PageControls>
            <Select />
            <Pagination />
          </PageControls>

          <Items id="left-page">
            {data.products.map((e, index) => (
              <ChildComponent key={index} data={e} />
            ))}
          </Items>
        </>
      ) : (
        <NoResults />
      )}
    </ResultsContainer>
  );
};
