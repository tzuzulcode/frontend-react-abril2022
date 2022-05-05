import React, { useEffect, useState } from 'react'

export default function Effects() {
    // Espacio para los hooks
    
    const [change,setChange] = useState(false)
    
    useEffect(()=>{
        console.log("Efecto")
    },[change])

    //Reto: Buscar una API


    //Termina el espacio 
  return (
    <div>
        <button onClick={()=>{setChange(!change)}}>Efecto</button>
    </div>
  )
}
