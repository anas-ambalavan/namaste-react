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
        state.cartDetails.items = state.cartDetails.items.map((item) => {
          if (item.id === existingCartItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalItemCost:
                item.totalItemCost +
                (action.payload.item.defaultPrice || action.payload.item.price),
            };
          }
          return item;
        });
      } else {
        const newCartItem = {
          ...cartItem,
          quantity: 1,
          totalItemCost:
            action.payload.item.defaultPrice || action.payload.item.price,
        };
        state.cartDetails.items.push(newCartItem);
      }

      state.cartDetails.itemsLength += 1;
      state.cartDetails.totalCost +=
        action.payload.item.defaultPrice || action.payload.item.price;

      if (action?.payload?.resInfo) {
        state.cartDetails.resInfo = {
          id: action.payload.resInfo.id,
          name: action.payload.resInfo.name,
          areaName: action.payload.resInfo.areaName,
          imageId: action.payload.resInfo.cloudinaryImageId,
          customSlug: action.payload.resInfo.customSlug,
        };
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
