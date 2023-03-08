import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginIn: false,
};

export const authorizationSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLoginIn(state, action) {
      state.loginIn = action.payload;
    },
  },
});

export const { setLoginIn } = authorizationSlice.actions;

export default authorizationSlice.reducer;
