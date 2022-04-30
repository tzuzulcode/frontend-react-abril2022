import React, { useState } from 'react'

export default function Contador() {

    // Hook: Función que realiza un proceso interno y devuelve un resultado
    const estado = useState(1) // Registra un valor en el estado y devuelve un array: useState(valor)
    const number = estado[0] // Valor almacenado en el estado
    const setNumber = estado[1] // Función que modifica el estado

    // let number = 0

    const incrementar = () =>{
        setNumber(number+3)
    }

  return (
    <div>
        <h1>{number}</h1>
        <p>{number}</p>
        <p>{number}</p>
        <p>{number}</p>
        <p>{number}</p>
        <p>{number}</p>
        <p>{number}</p>
        <button onClick={incrementar}>Presionar</button>
    </div>
  )
}
