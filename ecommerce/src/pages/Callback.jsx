import React, { useCallback, useEffect, useState } from 'react'
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
    const handleClick = useCallback((event)=>{
        console.log("Click", event.currentTarget)
    },[searchKeyword.value])

  return (
    <div>
      <h1>useCallback</h1>
      <input {...searchKeyword}/>
      <Characters searchKeyword={searchKeyword.value} onClick={handleClick} characters={characters}/>
      
    </div>
  )
}
