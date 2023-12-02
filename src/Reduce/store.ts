import { configureStore } from '@reduxjs/toolkit';
import { dataForms } from './dataFormSlice';
import { countriesSlice } from './countrySlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    countriesSlice: countriesSlice.reducer,
    dataForms: dataForms.reducer,
  },
});
