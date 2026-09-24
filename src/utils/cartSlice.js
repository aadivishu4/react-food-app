import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // mutating the state here directly
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearAllItems: (state) => {
      // mutating the state here directly
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearAllItems } = cartSlice.actions;
export default cartSlice.reducer;
