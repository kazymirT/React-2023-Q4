import { NavLink } from 'react-router-dom';
import {
  DetailsContainer,
  DetailsItem,
  DetailsTitle,
  ProductImages,
} from './style';
import { useGetProductByIdQuery } from '../Api/getData';
import { useParams } from 'react-router-dom';
import { LoaderDetails } from '../Loaders/LoaderDetails';

export const Details = () => {
  const params = useParams();
  const detailsId = params.detailsId;
  const { data, isFetching, isLoading } = useGetProductByIdQuery(
    detailsId ? detailsId : ''
  );

  return (
    <DetailsContainer>
      {(isFetching || isLoading) && <LoaderDetails />}
      {data && !isFetching && !isLoading && (
        <DetailsItem>
          <ProductImages src={data.images[0]} alt={data.title} />
          <DetailsTitle>{data.title}</DetailsTitle>
          <ul>
            <li>Brand: {data.brand}</li>
            <li>Category: {data.category}</li>
            <li>Price: {data.price}$</li>
          </ul>
          <p>{data.description}</p>
        </DetailsItem>
      )}
      <NavLink to={`/${location.search}`} className={'details-cancel'}>
        Cancel
      </NavLink>
      {!data && !isFetching && !isLoading && <div>No Result</div>}
    </DetailsContainer>
  );
};
