import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: 'white',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, {payload}) => {
      state.color = payload;
    }
  }
})

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;