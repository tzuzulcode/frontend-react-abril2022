import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { baseURL } from '../config'

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:baseURL}),
    endpoints:(builder)=>({
        getProducts: builder.query({
            query: ()=>"/api/products"
        })
    })
})

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query({
        query: (name) => `pokemon/${name}`,
      }),
    }),
})

// export default pokemonApi
export const {useGetPokemonByNameQuery} = pokemonApi