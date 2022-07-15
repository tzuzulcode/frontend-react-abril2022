import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { baseURL } from '../config'
import products from './products'
import auth from './auth'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
      baseUrl:baseURL,
      credentials:"include"
    }),
    endpoints:(builder)=>({
        ...products(builder),
        ...auth(builder)
    })
})


// export default pokemonApi
export const {useGetProductsQuery,useGetProductQuery} = api