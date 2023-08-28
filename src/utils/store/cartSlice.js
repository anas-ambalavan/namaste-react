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
    itemsLength: 0,
    totalCost: null,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      // console.log(action.payload.resInfo);
      const cartItem = action.payload.item;
      const existingCartItem = state.cartDetails.items.find(
        (item) => item.id === action.payload.item.id
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        existingCartItem.totalItemCost +=
          action.payload.item.defaultPrice || action.payload.item.price;
        state.cartDetails.itemsLength += 1;
        state.cartDetails.totalCost +=
          action.payload.item.defaultPrice || action.payload.item.price;
      } else {
        cartItem.quantity = 1;
        cartItem.totalItemCost =
          action.payload.item.defaultPrice || action.payload.item.price;
        state.cartDetails.itemsLength += 1;
        state.cartDetails.totalCost +=
          action.payload.item.defaultPrice || action.payload.item.price;
        state.cartDetails.items.push(cartItem);
      }
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
    incrementCartItemQuantity: (state, action) => {
      const item = state.cartDetails.items.find(
        (item) => item.id === action.payload
      );
      item.quantity += 1;
      item.totalItemCost += item.price || item.defaultPrice;
      state.cartDetails.itemsLength += 1;
      state.cartDetails.totalCost += item.price || item.defaultPrice;
    },
    decrementCartItemQuantity: (state, action) => {
      const item = state.cartDetails.items.find(
        (item) => item.id === action.payload
      );
      if (state.cartDetails.itemsLength === 1) {
        return initialState;
      } else if (item.quantity === 1) {
        const filteredData = state.cartDetails.items.filter(
          (cartItem) => cartItem.id !== action.payload
        );
        state.cartDetails.items = filteredData;
      } else {
        item.quantity -= 1;
        item.totalItemCost -= item.price || item.defaultPrice;
      }
      state.cartDetails.itemsLength -= 1;
      state.cartDetails.totalCost -= item.price || item.defaultPrice;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
