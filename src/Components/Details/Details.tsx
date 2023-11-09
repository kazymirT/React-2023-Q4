import { LoaderFunctionArgs, NavLink, useLoaderData } from 'react-router-dom';
import {
  DetailsContainer,
  DetailsItem,
  DetailsTitle,
  ProductImages,
} from './style';
import { getProduct } from '../Api/getData';
import { DetailsLoader, ProductsType } from '../../type/type';

export async function loader(params: LoaderFunctionArgs<unknown>) {
  const productId = params.params.detailsId;
  const url = new URL(params.request.url);

  if (productId) {
    const data: ProductsType = await getProduct(productId);
    return { data, url };
  }
  return { url };
}

export const Details = () => {
  const { data, url } = useLoaderData() as DetailsLoader;

  return (
    <DetailsContainer>
      <DetailsItem>
        <ProductImages src={data.images[0]} alt={data.title} />
        <DetailsTitle>{data.title}</DetailsTitle>
        <ul>
          <li>Brand: {data.brand}</li>
          <li>Category: {data.category}</li>
          <li>Price: {data.price}$</li>
        </ul>
        <p>{data.description}</p>

        <NavLink to={`/${url.search}`} className={'details-cancel'}>
          Cancel
        </NavLink>
      </DetailsItem>
    </DetailsContainer>
  );
};
