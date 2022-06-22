import React, { Suspense } from 'react'
import { useState,useEffect,useTransition,useDeferredValue } from 'react'
import Character from '../components/Character'

export default function Transition() {

    const [characters,setCharacters]= useState([])
    const [idCharacter,setIdCharacter]= useState()

    // isPending: Indica que la actualización marcada como de baja prioridad aun esta pendiente
    // startTransition: contiene actualizaciones del estado y las marca como de baja prioridad
    const [isPending,startTransition] = useTransition()

    

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(res=>res.json())
        .then(data=>{
            setCharacters(data.results)
            // setCharacter(data.results[0])
        })
    },[])

    const selectCharacter = (id)=>{
        // startTransition(()=>{
        //     setIdCharacter(id)
        // })
        setIdCharacter(id)
    }
    

  return (
    <section className='flex'>
        <div className='w-1/4 bg-gray-200'>
            <ul>
                {characters.map(character=>(
                    <li key={character.id} onClick={()=>{selectCharacter(character.id)}}>
                        {character.name}
                    </li>
                ))}
            </ul>
        </div>
        {/* <Suspense fallback={<p className='bg-yellow-400'>Loading...</p>}>
            <Character idCharacter={idCharacter}/>
        </Suspense> */}
        {/* {isPending&&<p className='bg-yellow-400'>Loading character...</p>} */}
        <Character idCharacter={idCharacter}/>
        
    </section>
  )
}
