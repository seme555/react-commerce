import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export default cartSlice.reducer;
