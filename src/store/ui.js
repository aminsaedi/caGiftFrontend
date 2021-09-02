import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "ui",
  initialState: {
    isNavbarExpanded: false,
    loading: false,
  },
  reducers: {
    navbarExpanded: (ui, action) => {
      ui.isNavbarExpanded = true;
    },
    navbarCollapsed: (ui, action) => {
      ui.isNavbarExpanded = false;
    },
  },
});

export default reducer;
