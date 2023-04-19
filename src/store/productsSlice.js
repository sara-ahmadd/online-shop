import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const productsActions = productsSlice.actions;
