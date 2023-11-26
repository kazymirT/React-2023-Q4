import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataMain: [],
  dataDetails: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMainData: (state, action) => {
      state.dataMain = action.payload;
    },
    setDetailsData: (state, action) => {
      state.dataDetails = action.payload;
    },
  },
});

export const { setDetailsData, setMainData } = dataSlice.actions;

export default dataSlice.reducer;
