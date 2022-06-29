import React, { useEffect, useReducer } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { get, post } from '../api'
import { cartContext } from '../context/Cart'
import counterReducer, { initialState } from '../reducers/counterReducer'

export default function Home() {
  const [state,dispatch] = useReducer(counterReducer,initialState)
  const {setItems} = useContext(cartContext)
  const [products,setProducts] = useState([])
  useEffect(()=>{
    get("/api/products")
    .then(({data})=>{
      setProducts(data)
    })
    .catch(console.log)
  },[])

  const addToCart = (id) =>{
    post("/api/cart/add",{
      idProduct:id,
      amount:1
    }).then(data=>{
      setItems({
        type:"UPDATE",
        payload:data
      })

    })
  }

  return (
    <>
        <Link to="/login">Login</Link>
        <p>{state.counter}</p>

        <button className='bg-green-300' onClick={()=>{dispatch({type:"ADD"})}}>Add</button>
        <button className='bg-red-300' onClick={()=>{dispatch({type:"SUB"})}}>Sub</button>

        <section className='grid grid-cols-3 gap-5 w-3/4 mx-auto'>
          {products.map(product=>(
            <article className='bg-gray-200 shadow-sm' key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <img src={product.images[0]} alt={product.name} />
              <button onClick={()=>{
                addToCart(product._id)
              }}>Add to cart</button>
            </article>
          ))}
        </section>
    </>
  )
}
