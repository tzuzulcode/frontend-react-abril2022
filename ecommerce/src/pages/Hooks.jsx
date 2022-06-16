import React,{Suspense, useDeferredValue,useTransition} from 'react'
import { lazy } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../hooks/useFetch' // Static import
// import Calendar from '../components/Calendar'
const LazyCalendar = lazy(()=>import('../components/Calendar'))

const Filter = ({keyword})=>{
    const [filteredData,setFilteredData] = useState([])
    // useEffect(()=>{
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setFilteredData(data))
    // },[keyword])
    
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
    const [active,setActive] = useState(false)
    const deferredValue = useDeferredValue(input,{
        timeoutMs:5000
    })

    const importModule = ()=>{
        import("../js/modulo")
        .then((module)=>{
            module.default()
            module.sayBye()
        }) //Dynamic import
    }
  return (
    <div>
        <button onClick={importModule}>Importar</button>
        {console.log(data)}
        <input onChange={({target})=>{setInput(target.value)}} value={input}/>
        <Filter keyword={deferredValue}/>
        <button onClick={()=>{setActive(!active)}}>Activate</button>
        <section>
            <Suspense fallback={<p>Loading</p>}>
                {active&&<LazyCalendar />}
            </Suspense>
            <Suspense fallback={<p>Loading</p>}>
                {active&&<LazyCalendar />}
            </Suspense>
            {/* {active?<LazyCalendar/>:<p>Loading</p>} */}
            {/* {active&&<LazyCalendar day={true}/>} */}
        </section>
    </div>
  )
}
