import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMainLoading: false,
  isMainError: false,
  isDetailsLoading: false,
  isDetailsError: false,
};

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setIsMainLoading: (state, action) => {
      state.isMainLoading = action.payload;
    },
    setIsMainError: (state, action) => {
      state.isMainError = action.payload;
    },
    setIsDetailsLoading: (state, action) => {
      state.isDetailsLoading = action.payload;
    },
    setIsDetailsError: (state, action) => {
      state.isDetailsError = action.payload;
    },
  },
});

export const {
  setIsMainLoading,
  setIsMainError,
  setIsDetailsLoading,
  setIsDetailsError,
} = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
