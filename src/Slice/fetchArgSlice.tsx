import { createSlice } from '@reduxjs/toolkit';

export type InitialFetchArgState = {
  limit: string;
  page: string;
  total: string;
};

export type UpdateArgPayload = {
  payload: {
    limit?: string;
    page?: string;
    total?: string;
  };
};
const initialState: InitialFetchArgState = {
  limit: new URLSearchParams(location.search).get('limit') || '5',
  page: new URLSearchParams(location.search).get('page') || '1',
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
