import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      const isFound = state.cart.some((element) => {
        if (element._id === action.payload._id) {
          return true;
        }

        return false;
      });

      if (isFound) return;
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { setCart } = cartSlice.actions;
