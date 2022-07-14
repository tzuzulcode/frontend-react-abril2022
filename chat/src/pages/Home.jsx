import React from 'react'
import { useGetPokemonByNameQuery } from '../api/query'

export default function Home() {
  const {data,error,isLoading} = useGetPokemonByNameQuery()
  return (
    <div>
      <h1>Home</h1>
      {console.log({data,error,isLoading})}
    </div>
  )
}
