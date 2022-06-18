import React from 'react'
import useFetch from '../hooks/useFetch'

export default function Character({idCharacter}) {
    const [data,error,loading] = useFetch("https://rickandmortyapi.com/api/character/"+idCharacter)

    
    
  return (
    <div className='bg-gray-300 w-full'>
        <h1>Personaje</h1>
        {!data || Object.entries(data).length===0?
            <p>Selecciona un personaje para mostrar datos</p>:
            <div>
                <img src={data.image}></img>
                <p>{data.name}</p>
            </div>
        }
    </div>
  )
}
