import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API = 'https://dog.ceo/api/breeds/image/random';

const initialState = {
  isLoading: false,
  dogs: []
};

const requestDog = createAsyncThunk('dogs/requestDog', async (state, thunk) => {
  try {
    const dog = await fetch(API);
    return dog.json();
  } catch (e) {
    console.error("Couldn't process to fetch a dog!");
  }
});

const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  extraReducers: {
    [requestDog.pending]: (state) => {
      state.isLoading = true;
    },
    [requestDog.fulfilled]: (state, {payload}) => {
      state.isLoading = false;

      if (state.dogs.length === 2) {
        state.dogs = [payload];
        return;
      }

      state.dogs.push(payload);
    },
    [requestDog.rejected]: (state) => {
      state.isLoading = false;
      alert("Couldn't process to fetch a dog!");
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(requestDog.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(requestDog.fulfilled, (state, {payload}) => {
  //       state.isLoading = false;
  
  //       if (state.dogs.length === 2) {
  //         state.dogs = [payload];
  //         return;
  //       }
  
  //       state.dogs.push(payload);
  //     })
  //     .addCase(requestDog.rejected, (state) => {
  //       state.isLoading = false;
  //       alert("Couldn't process to fetch a dog!");
  //     })
  // }
});

export { requestDog };
export default dogsSlice.reducer;
