import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: JSON.parse(localStorage.getItem('cart')) || [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return obj.id === payload.id && obj.size === payload.size;
      });
      findItem
        ? findItem.count++
        : state.items.push({
            ...payload,
            count: 1,
          });
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusItem(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return obj.id === payload.id && obj.size === payload.size;
      });
      findItem && findItem.count--;
      state.totalPrice -= findItem.price;
    },

    removeItem(state, { payload }) {
      const findItem = state.items.find((obj) => {
        return obj.id === payload.id && obj.size === payload.size;
      });
      state.totalPrice -= findItem.price * findItem.count;
      state.items = state.items.filter((obj) => {
        return obj.id !== payload.id || obj.size !== payload.size;
      });
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, totalPrice, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
