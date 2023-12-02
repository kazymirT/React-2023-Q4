import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISubmitForm } from '../Components/Forms/HookForm';

type DataFormType = {
  firstName: string;
  lastName: string;
};

type InitialStateType = {
  dataFormHook: ISubmitForm[];
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
    setDataFormHook: (state, action: PayloadAction<ISubmitForm[]>) => {
      state.dataFormHook = action.payload;
    },
    setDataFormUncontrolled: (state, action: PayloadAction<DataFormType>) => {
      state.dataFormUncontrolled.push(action.payload);
    },
  },
});

export const { setDataFormHook, setDataFormUncontrolled } = dataForms.actions;

export default dataForms.reducer;
