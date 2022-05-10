import React,{useContext} from 'react'
import { CartContext } from './Context'

export default function Producto({producto}) {

  const {carrito,setCarrito} = useContext(CartContext)

  const agregarAlCarrito = () =>{
    setCarrito([...carrito,producto])
  }
  return (
    <article>
        <h2>{producto.name}</h2>
        <p>{producto.price}</p>
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </article>
  )
}
