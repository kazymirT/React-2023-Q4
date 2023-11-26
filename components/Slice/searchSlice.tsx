import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// export const getInitialSearchValue = () => {
//   return (
//     new URLSearchParams(location.search).get('search') ||
//     ''
//   );
// };

const initialState = {
  searchValue: '',
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
