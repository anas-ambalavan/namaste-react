import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDetails: {
    resInfo: {
      id: "",
      name: "",
      areaName: "",
      imageId: "",
    },
    items: [],
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload.resInfo);
      state.cartDetails.items.push(action.payload.items);
      if (action?.payload?.resInfo) {
        state.cartDetails.resInfo.id = action.payload.resInfo.id;
        state.cartDetails.resInfo.name = action.payload.resInfo.name;
        state.cartDetails.resInfo.areaName = action.payload.resInfo.areaName;
        state.cartDetails.resInfo.imageId =
          action.payload.resInfo.cloudinaryImageId;
      }
    },
    removeItem: (state, action) => {},
    clearCart: (state) => {
      return initialState; //state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
