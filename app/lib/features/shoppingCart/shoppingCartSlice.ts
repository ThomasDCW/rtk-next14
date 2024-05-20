import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: string;
  title: string;
  price: number;
  quantity?: number;
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

    remove: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(({ id }) => id !== action.payload);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const productToUpdate = state.products.find(({ id }) => id === productId);
      if (productToUpdate) {
        productToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addToCart, remove, reset } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
