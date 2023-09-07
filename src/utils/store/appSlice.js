import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  showModal: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleModal: (state, action) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { toggleMenu, toggleModal } = appSlice.actions;

export default appSlice.reducer;
