import { ChildComponent } from '../ChildComponent/ChildComponents';
import styles from './styles.module.css'
import { NoResults } from '../NoResults';
import { useRouter } from 'next/router';
import { Select } from '../Select/Select';
import { Pagination } from '../Pagination/Pagination';
import { updateSearchParams } from '../utils/updateSearchParams';
import { FetchArgType, ProductResponse } from '../type/type';
import { useGetProductsByNameQuery } from '../../pages/api/getData';

export const Results = () => {
  const router = useRouter();
  const fetchArg: FetchArgType = {
    name: typeof router.query.search === 'string' ? router.query.search : ' ',
    limit: typeof router.query.limit === 'string' ? router.query.limit : '5',
    page: typeof router.query.page === 'string' ? router.query.page : '1',
  }

  const skip: number = (Number(fetchArg.page) - 1) * Number(fetchArg.limit);
  fetchArg.page = String(skip);
  
  const result = useGetProductsByNameQuery(
    fetchArg,
    {
      skip: router.isFallback,
    }
  );
  const data: ProductResponse | undefined = result.data;


  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value;

    if (newLimit !== data?.limit) {
      setParams('limit', newLimit);
    }
  };
  const setParams = (paramName: string, paramValue: string) => {
    const newUrl = updateSearchParams(paramName, paramValue);
      router.push(newUrl);
  };
  const handlePageChange = (newPage: number, totalPages: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setParams('page', String(newPage));
    }
  };

  return (
    <div className={styles.container} data-test="results">

      {data?.products && data.products.length > 0 && (
        <>
          <div className='control'>
            <Select limit={typeof router.query.limit === 'string' ? router.query.limit : '5'} onChange={handleSelectChange} />
            <Pagination
              limit={Number(data.limit)}
              skip={skip}
              page={Number(router.query.page)}
              total={Number(data.total)}
              onChange={handlePageChange}
            />
          </div>

          <div className={styles['items']} id="left-page">
            {data.products.map((item) => (
              <ChildComponent key={item.id} data={item} />
            ))}
          </div>
        </>
      )}

      {data?.products.length === 0 && <NoResults />}
    </div>
  );
};
