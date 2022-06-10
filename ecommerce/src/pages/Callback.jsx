import React, { useCallback, useEffect, useState,useMemo } from 'react'
import Characters from '../components/Characters'
import useInput from '../hooks/useInput'

let lastIndex = 0

export default function Callback() {

    const [characters,setCharacters] = useState([])
    const searchKeyword = useInput("text","")

    useEffect(()=>{
      fetch("https://rickandmortyapi.com/api/character")
      .then(response=>response.json())
      .then(({results})=>{
        setCharacters(results)
      })
      .catch(console.log)
    },[])


    const [number,setNumber] = useState(0)
    const items = useMemo(
        ()=>{
            console.log("Filtering...")
            return characters.filter(character=>character.name.includes(searchKeyword.value))
        },
        [searchKeyword.value]
    )

    // const increment = useCallback(()=>{
    //   setNumber(number+1)
    // },[number])

  return (
    <div>
      <h1>useCallback</h1>
      <input {...searchKeyword}/>
      <button onClick={()=>{setNumber(number+1)}}>Increment</button>
      <p>{number}</p>
      <Characters characters={items}/>
      
    </div>
  )
}
