import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../pages/api/getData";

export const makeStore = () =>
  configureStore({
    reducer: {
      [getProducts.reducerPath]: getProducts.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getProducts.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const wrapper = createWrapper<AppStore>(makeStore);
