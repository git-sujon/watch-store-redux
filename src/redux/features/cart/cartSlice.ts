import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../types/globalTypes';

interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existProduct) {
        existProduct.quantity = existProduct.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },

    removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
      const existProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existProduct && (existProduct.quantity! > 1)) {
        existProduct.quantity = existProduct.quantity! - 1;
      } else {
        state.products=state.products.filter(product=> product._id !== action.payload._id)
      }
    },

    deleteFromCart: (state, action:PayloadAction<IProduct>) => {
      state.products= state.products.filter(product=> product._id !== action.payload._id)
    }

  },
});

export const { addToCart, removeOneFromCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
