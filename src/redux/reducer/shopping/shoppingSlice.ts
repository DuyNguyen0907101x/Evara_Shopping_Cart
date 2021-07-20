import { createSlice } from "@reduxjs/toolkit";
import Products from '../../../data/products.json'

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: {
    list: [] as any
  },
  reducers: {
    getShopping: state => {
      state.list = Products
    }
  }
})

// Action creators are generated for each case reducer function
export const { getShopping } = shoppingSlice.actions;
export default shoppingSlice.reducer