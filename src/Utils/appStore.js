import { createSlice } from "@reduxjs/toolkit";
import navBar from "./navbarSlice";
export const appStore = createSlice({
  reducer: {
    navbar: navBar,
  },
});
