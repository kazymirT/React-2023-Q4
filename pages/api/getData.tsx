import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from "next-redux-wrapper";
import { FetchArgType, ProductResponse, ProductsType } from '../../components/type/type';


export const getProducts = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
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

export const { getProductsByName, getProductById } =
  getProducts.endpoints;
export const {
    useGetProductsByNameQuery,
    useGetProductByIdQuery,
    util: { getRunningQueriesThunk },
  } = getProducts;