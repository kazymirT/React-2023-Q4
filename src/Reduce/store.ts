import { configureStore } from '@reduxjs/toolkit';
import { dataForms } from './dataFormSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    dataForms: dataForms.reducer,
  },
});
