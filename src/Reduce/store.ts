import { configureStore } from '@reduxjs/toolkit';
import { dataForms } from './Slice/dataFormSlice';
import { countriesSlice } from './Slice/countrySlice';
import { errorSlice } from './Slice/errorsSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    countriesSlice: countriesSlice.reducer,
    dataForms: dataForms.reducer,
    errorSlice: errorSlice.reducer,
  },
});
