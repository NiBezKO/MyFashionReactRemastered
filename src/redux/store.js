import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import products from './slices/filterSlice';
import cart from './slices/cartSlice';
import authorization from './slices/authorizationSlice';

export const store = configureStore({
  reducer: {
    filter,
    products,
    cart,
    authorization,
  },
});
