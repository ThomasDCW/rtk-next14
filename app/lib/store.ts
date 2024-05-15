import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      shoppingCartReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
