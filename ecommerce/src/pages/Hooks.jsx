import React,{useDeferredValue,useTransition} from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'

const Filter = ({keyword})=>{
    const [filteredData,setFilteredData] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFilteredData(data))
    },[keyword])
    return (
        <div>
            {filteredData.map(element=>{
                return (
                    <article>{element}</article>
                )
            })}
        </div>
    )
}

export default function Hooks() {
    const [data,error,loading] = useFetch("https://rickandmortyapi.com/api/character")

    const [input,setInput] = useState("") //high-priority updates
    const deferredValue = useDeferredValue(input,{
        timeoutMs:5000
    })
  return (
    <div>
        {console.log(data)}
        <input onChange={({target})=>{setInput(target.value)}} value={input}/>
        <Filter keyword={deferredValue}/>
    </div>
  )
}
