import { useEffect, useState } from 'react';
import { ComponentDate, ProductResponse, ResultsProps } from '../../type/type';
import { ChildComponent } from '../ChildComponent/ChildComponents';
import { getDate } from '../Api/getData';
import { Loader } from '../Loader/Loader';
import { Select } from '../Select';
import { Pagination } from '../Pagination';
import { Items, PageControls, ResultsContainer } from './style';
import { NoResults } from '../NoResults';

export const Results = (props: ResultsProps) => {
  const [isLoader, setIsLoader] = useState(true);
  const [date, setData] = useState<ComponentDate>({ date: null });
  const [selectedValue, setSelectedValue] = useState('10');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsTotal, setProductTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setIsLoader(true);

    async function loadData() {
      if (typeof props.data === 'string') {
        const productResponse: ProductResponse | null = await getDate(
          props.data,
          selectedValue,
          currentPage
        );
        if (productResponse && productResponse.products.length > 0) {
          setData({ date: productResponse.products });
          setProductTotal(productResponse.total);
          setIsLoader(false);
        } else {
          setIsLoader(false);
          setData({ date: null });
        }
      }
    }

    if (props.data !== null) {
      loadData();
    }
  }, [currentPage, props.data, selectedValue]);

  useEffect(() => {
    const total = productsTotal / Number(selectedValue);
    setTotalPage(total);
  }, [productsTotal, selectedValue, setProductTotal, setSelectedValue]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <ResultsContainer hidden={props.aside}>
      {date.date && (
        <>
          <PageControls>
            <Select selectedValue={selectedValue} onChange={handleChange} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPage}
              onPageChange={handlePageChange}
            />
          </PageControls>

          <Items>
            {date.date.map((e, index) => (
              <ChildComponent onClick={props.onClick} key={index} data={e} />
            ))}
          </Items>
        </>
      )}
      {!date.date && isLoader ? <Loader /> : !date.date && <NoResults />}
    </ResultsContainer>
  );
};
