import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import resSlice from "./resSlice";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
    res: resSlice,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
