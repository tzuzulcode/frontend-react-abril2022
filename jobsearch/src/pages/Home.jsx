import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { putWithToken } from '../api'

export default function Home() {

  const empleo = useRef()

  const aplicar = ()=>{
    // 6283145b8af7034b7f7ecdfc
    // putWithToken("/api/jobs/apply/"+empleo.current.value)
    putWithToken(`/api/jobs/apply/${empleo.current.value}`)
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>

        <input ref={empleo} placeholder='id empleo'/>
        <button onClick={aplicar}>Aplicar</button>

        <Link to="/details/tzuzul">Ir a componente</Link>
        <Link to="/props" state={{
          name:"Tzuzul",
          id:"abc123",
          active:true
        }}>Ir a componente con props</Link>
    </div>
  )
}
