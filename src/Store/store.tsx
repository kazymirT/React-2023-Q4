import { configureStore } from '@reduxjs/toolkit';
import { searchValueSlice } from '../Slice/searchSlice';
import { getProducts } from '../Components/Api/getData';
import { fetchArgSlice } from '../Slice/fetchArgSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    fetchArg: fetchArgSlice.reducer,
    searchValue: searchValueSlice.reducer,
    [getProducts.reducerPath]: getProducts.reducer,
  },
  middleware: (gDM) => gDM().concat(getProducts.middleware),
});
