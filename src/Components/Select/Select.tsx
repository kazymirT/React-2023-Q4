import { useLoaderData } from 'react-router-dom';
import { ProductsType } from '../../type/type';
import { useHistory } from 'react-router-use-history';

type ResultsLoader = {
  data: {
    skip: string;
    products: ProductsType[];
    total: string;
    limit: string;
  };
  search: string;
  url: URL;
};

export const Select = () => {
  const history = useHistory();
  const { url } = useLoaderData() as ResultsLoader;
  const limit = url.searchParams.get('limit') || '';

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value;

    if (newLimit !== limit) {
      const newUrl = new URL(url.toString());
      newUrl.searchParams.set('limit', newLimit);
      newUrl.searchParams.set('page', `1`);
      history.push(newUrl.search);
    }
  };

  return (
    <>
      <div className="selectContainer">
        <span>Cards per page:</span>
        <select value={limit} onChange={handleSelectChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </>
  );
};
