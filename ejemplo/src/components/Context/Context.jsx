import React, { useState,createContext } from 'react'
import Navbar from './Navbar'
import Productos from './Productos'

export const CartContext = React.createContext()

export default function Context() {
  const [carrito,setCarrito] = useState([])
  
  return (
    <CartContext.Provider value={{
      carrito,
      setCarrito
    }}>
        <Navbar carrito={carrito}/>
        <Productos/>

        <button onClick={()=>{
          setCarrito([...carrito,{name:"Producto"}])
        }}>Agregar al carrito</button>
    </CartContext.Provider>
  )
}