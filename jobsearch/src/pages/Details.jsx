import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  const params = useParams()
  
  return (
    <div>
        <h1>Detalles: {params.id}</h1>
    </div>
  )
}
