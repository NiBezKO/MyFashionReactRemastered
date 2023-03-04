import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import products from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
    products,
  },
});
