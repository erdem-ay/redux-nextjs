import { configureStore } from "@reduxjs/toolkit";

import { reducer as userReducer } from "./user";
import { reducer as productReducer } from "./product";
import { reducer as basketReducer } from "./basket";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      user: userReducer,
      products:productReducer,
      basket:basketReducer,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});