import { createSlice } from '@reduxjs/toolkit';
import { InitialFetchArgState, UpdateArgPayload } from '../type/type';

// const params = new URLSearchParams(window.location.search);

const initialState: InitialFetchArgState = {
  // limit: params.get('limit') || '5',
  // page: params.get('page') || '1',
  limit: '5',
  page: '1',
  total: '',
};

export const fetchArgSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    updateLimit: (state, action: UpdateArgPayload) => {
      if (action.payload.limit !== undefined) {
        state.limit = action.payload.limit;
      }
    },
    updatePage: (state, action: UpdateArgPayload) => {
      if (action.payload.page !== undefined) {
        state.page = action.payload.page;
      }
    },
    updateTotal: (state, action: UpdateArgPayload) => {
      if (action.payload.total !== undefined) {
        state.total = action.payload.total;
      }
    },
  },
});

export const { updateLimit, updatePage, updateTotal } = fetchArgSlice.actions;

export default fetchArgSlice.reducer;
