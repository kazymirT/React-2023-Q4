import { createWrapper } from "next-redux-wrapper";

import { configureStore } from "@reduxjs/toolkit";
import { getProducts } from "../../pages/api/getData";

export const makeStore = () =>
  configureStore({
    middleware: (gDM) => gDM().concat(getProducts.middleware),
    reducer: {
      [getProducts.reducerPath]: getProducts.reducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
