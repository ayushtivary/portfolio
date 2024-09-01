import { createSlice } from "@reduxjs/toolkit";
const navbarSlice = createSlice({
  name: "nav",
  initialState: {
    showScrollPage: null,
  },
  reducers: {
    addNavbarCondition: (state, action) => {
      state.showScrollPage = action.payload;
    },
  },
});

export const { addNavbarCondition } = navbarSlice.actions;

export default navbarSlice.reducer;
