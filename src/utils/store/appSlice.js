import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
