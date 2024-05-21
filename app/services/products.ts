import { Product } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/products" }),
  tagTypes: [],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "",
    }),
    getProductById: builder.query({
      query: () => "",
      transformResponse: (baseQueryReturnValue: Product[], meta, arg) =>
        baseQueryReturnValue.find((product) => product.id === arg),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
