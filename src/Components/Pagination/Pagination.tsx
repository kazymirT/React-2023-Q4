import { useHistory } from 'react-router-use-history';
import { ProductsType } from '../../type/type';
import { useContext } from 'react';
import { MyContext } from '../../Context/MyContext';

type PaginationLoader = {
  url: URL;
  data: {
    skip: string;
    products: ProductsType[];
    total: string;
    limit: string;
  };
};

export const Pagination = () => {
  const history = useHistory();
  const { url, data } = useContext(MyContext) as PaginationLoader;
  const totalPages: number = Math.ceil(Number(data.total) / Number(data.limit));
  const currentPage: number = Number(data.skip) / Number(data.limit) + 1;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      const newUrl = new URL(url.toString());
      newUrl.searchParams.set('page', `${newPage}`);
      history.push(newUrl.search);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      <span>
        {currentPage}/{totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};
