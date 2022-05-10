import React from 'react'
import Producto from './Producto'

const productos = [
    {
        id:"prod-1",
        name:"Producto 1",
        price:300
    },
    {
        id:"prod-2",
        name:"Producto 2",
        price:100
    }
]

export default function Productos({setCarrito,carrito}) {
  return (
    <div>
        {productos.map(producto=>(
            <Producto key={producto.id} producto={producto}/>
        ))}
    </div>
  )
}
