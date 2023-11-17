import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductResponse, ProductsType } from '../../type/type';
import {
  setIsDetailsError,
  setIsDetailsLoading,
  setIsMainError,
  setIsMainLoading,
} from '../../Slice/isLoadingSlice';
import { setDetailsData, setMainData } from '../../Slice/dataSlice';
import { updateTotal } from '../../Slice/fetchArgSlice';

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
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setIsMainLoading(true));
        dispatch(setIsMainError(false));
        try {
          const { data } = await queryFulfilled;
          dispatch(setMainData(data));
          dispatch(updateTotal({ total: data.total }));
          dispatch(setIsMainLoading(false));
        } catch (err) {
          dispatch(setIsMainError(true));
          dispatch(setIsMainLoading(false));
        }
      },
    }),
    getProductById: build.query<ProductsType, string>({
      query: (productId) => `products/${productId}`,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setIsDetailsLoading(true));
        dispatch(setIsDetailsError(false));
        try {
          const { data } = await queryFulfilled;
          dispatch(setDetailsData(data));
          dispatch(setIsDetailsLoading(false));
        } catch (err) {
          dispatch(setIsDetailsError(true));
          dispatch(setIsDetailsLoading(false));
        }
      },
    }),
  }),
});

export const { useGetProductsByNameQuery, useGetProductByIdQuery } =
  getProducts;
