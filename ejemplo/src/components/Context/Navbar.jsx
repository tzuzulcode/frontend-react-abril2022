import React from 'react'

export default function Navbar({carrito}) {
  return (
    <nav>
        <ul>
            <li>Home</li>

            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>

            <li>Carrito: {carrito.length}</li>
        </ul>
    </nav>
  )
}
