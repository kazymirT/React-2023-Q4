import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type DataFormType = {
  firstName: string;
  lastName: string;
};

type InitialStateType = {
  dataFormHook: DataFormType[];
  dataFormUncontrolled: DataFormType[];
};

const initialState: InitialStateType = {
  dataFormHook: [],
  dataFormUncontrolled: [],
};

export const dataForms = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDataFormHook: (state, action: PayloadAction<DataFormType>) => {
      state.dataFormHook.push(action.payload);
    },
    setDataFormUncontrolled: (state, action: PayloadAction<DataFormType>) => {
      state.dataFormUncontrolled.push(action.payload);
    },
  },
});

export const { setDataFormHook, setDataFormUncontrolled } = dataForms.actions;

export default dataForms.reducer;
