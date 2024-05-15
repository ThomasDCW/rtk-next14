import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: string;
  title: string;
  price: number;
};

type ShoppingCartState = {
  products: Product[];
};

const initialState: ShoppingCartState = {
  products: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    reset: () => initialState,
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(({ id }) => id !== action.payload);
    },
  },
});
console.log(shoppingCartSlice.getInitialState());

export const { add, remove, reset } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
