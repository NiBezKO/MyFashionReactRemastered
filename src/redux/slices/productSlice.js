import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import axios from 'axios';

// export const fetchProducts = createAsyncThunk(
//   'pizza/fetchProductsStatus',
//   async (params, thunkApi) => {
//     const { order, sortBy, category } = params;
//     const { data } = await axios.get(
//       `https://637fa1022f8f56e28e925aec.mockapi.io/clothingList?${category}&sortBy=${sortBy}&order=${order}`,
//     );

//     return data;
//   },
// );

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },

    // xtraReducers: (builder) => {
    //   builder.addCase(fetchProducts.fulfilled, (state, action) => {
    //     state.products = action.payload;
    //   });
    // },
  },
});

//export const selectProductsData = (state) => state.products.products;

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
