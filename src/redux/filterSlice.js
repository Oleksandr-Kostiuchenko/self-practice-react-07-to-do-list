//* Redux
import { createSlice } from "@reduxjs/toolkit";

//* Slice
const slice = createSlice({
  name: "filter",
  initialState: {
    status: "all",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = slice.actions;
export default slice.reducer;

//* Selectors
export const selectFilter = (state) => state.filter.status;
