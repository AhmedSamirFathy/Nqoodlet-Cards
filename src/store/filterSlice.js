import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  type: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setTypeFilter: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setStatusFilter, setTypeFilter } = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;
