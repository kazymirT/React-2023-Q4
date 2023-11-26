import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorages } from '../Components/Storage/Storage';

export const getInitialSearchValue = () => {
  return (
    new URLSearchParams(location.search).get('search') ||
    getLocalStorages('search') ||
    ''
  );
};

const initialState = {
  searchValue: getInitialSearchValue(),
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
