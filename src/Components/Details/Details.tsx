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
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';

export const Details = () => {
  const params = useParams();
  const detailsId = params.detailsId;
  const { isDetailsLoading } = useSelector(
    (state: RootState) => state.isLoading
  );
  const { data } = useGetProductByIdQuery(detailsId ? detailsId : '');

  return (
    <DetailsContainer>
      {isDetailsLoading && <LoaderDetails />}
      {data && !isDetailsLoading && (
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
      <NavLink
        to={`/${location.search}`}
        data-testid="details-cancel"
        className={'details-cancel'}
      >
        Cancel
      </NavLink>
      {!data && isDetailsLoading && <div>No Result</div>}
    </DetailsContainer>
  );
};
