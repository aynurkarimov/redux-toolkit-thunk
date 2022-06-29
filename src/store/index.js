import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './features/counter';
import themeReducer from './features/theme';
import dogsReducer from './features/dogs';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    dogs: dogsReducer,
  },
});

export default store;
