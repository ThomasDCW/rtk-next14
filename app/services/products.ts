import { Product } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/products" }),
  tagTypes: [],

  endpoints: (builder) => ({
    getProducts: builder.query<Product[], any>({
      query: () => "",
    }),
    getProductById: builder.query({
      query: () => "",
      transformResponse: (product: Product[], meta, arg) =>
        product.find(({ id }) => id === arg),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
