import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesItems: [],
};

export const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const findItem = state.favoritesItems.find((obj) => obj.id === state.payload);
      if (findItem) {
        return state.favoritesItems.filter((obj) => obj.id !== action.payload);
      } else {
        state.favoritesItems.push({
          ...action.payload,
        });
      }
    },
    removeFavorite(state, action) {
      state.favoritesItems.filter((obj) => obj.id !== action.payload);
    },
    clearFavorites(state) {
      state.favoritesItems = [];
    },
  },
});

export const { addToFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
