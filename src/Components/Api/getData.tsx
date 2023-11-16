import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductResponse, ProductsType } from '../../type/type';

type FetchArgType = {
  name: string;
  limit: string;
  page: string;
};

export const getProducts = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getProductsByName: build.query<ProductResponse, FetchArgType>({
      query: (fetchArg) =>
        `products/search?q=${fetchArg.name}&limit=${fetchArg.limit}&skip=${fetchArg.page}`,
    }),
    getProductById: build.query<ProductsType, string>({
      query: (productId) => `products/${productId}`,
    }),
  }),
});

export const { useGetProductsByNameQuery, useGetProductByIdQuery } =
  getProducts;
