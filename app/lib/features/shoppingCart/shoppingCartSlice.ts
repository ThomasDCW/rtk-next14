import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  title: string;
  price: number;
  quantity?: number;
  image?: string;
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

    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProductIndex = state.products.findIndex(
        ({ title }) => title === action.payload.title
      );
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity! += 1;
        state.products[existingProductIndex].price += action.payload.price;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart, reset } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
