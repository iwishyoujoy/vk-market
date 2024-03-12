import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICartItem } from '../../types/cart'

export const cartApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getCartItems: builder.query<ICartItem[], void>({
      query: () => `products`,
    })
  }),
})

export const { useGetCartItemsQuery } = cartApi