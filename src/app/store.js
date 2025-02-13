import { configureStore } from "@reduxjs/toolkit";
import cartred from "../feautres/Slice";
export const store = configureStore({
  reducer: {
    carts:cartred,
  },
});