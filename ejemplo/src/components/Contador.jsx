import React, { useState } from 'react'

export default function Contador() {

    const [number,setNumber] = useState(0)

    // let number = 0

    const incrementar = () =>{
        setNumber(number+1)
    }

  return (
    <div>
        <h1>{number}</h1>
        <p>{number}</p>
        <button onClick={incrementar}>Presionar</button>
    </div>
  )
}
