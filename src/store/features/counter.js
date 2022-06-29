import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
    reset: (state) => {
      state.number = 0;
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;