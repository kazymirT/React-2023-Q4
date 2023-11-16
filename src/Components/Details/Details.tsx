import { NavLink } from 'react-router-dom';
import {
  DetailsContainer,
  DetailsItem,
  DetailsTitle,
  ProductImages,
} from './style';
import { useGetProductByIdQuery } from '../Api/getData';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

export const Details = () => {
  const params = useParams();
  const detailsId = params.detailsId;
  const { data, isFetching, isLoading } = useGetProductByIdQuery(
    detailsId ? detailsId : ''
  );
  if (data) {
    return (
      <DetailsContainer>
        <DetailsItem>
          {(isFetching || isLoading) && <Loader />}
          <ProductImages src={data.images[0]} alt={data.title} />
          <DetailsTitle>{data.title}</DetailsTitle>
          <ul>
            <li>Brand: {data.brand}</li>
            <li>Category: {data.category}</li>
            <li>Price: {data.price}$</li>
          </ul>
          <p>{data.description}</p>

          <NavLink to={`/${location.search}`} className={'details-cancel'}>
            Cancel
          </NavLink>
        </DetailsItem>
      </DetailsContainer>
    );
  }
};
