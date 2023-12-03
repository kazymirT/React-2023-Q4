import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISubmitForm } from '../../Components/utils/type';

type InitialStateType = {
  dataForms: ISubmitForm[];
};

const initialState: InitialStateType = {
  dataForms: [],
};

export const dataForms = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDataFormHook: (state, action: PayloadAction<ISubmitForm[]>) => {
      state.dataForms = action.payload;
    },
  },
});

export const { setDataFormHook } = dataForms.actions;

export default dataForms.reducer;
