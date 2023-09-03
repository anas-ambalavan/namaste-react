import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import resSlice from "./resSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    res: resSlice,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
