import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/Cart'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from 'react';
import PaymentForm from './PaymentForm';
import { useEffect } from 'react';
import { get } from '../api';
import {stripePK} from "../config"

const stripe = loadStripe(stripePK)

export default function CartItems() {
    const {items} = useContext(cartContext)
    const [clientSecret,setClientSecret] = useState()

    useEffect(()=>{
        get("/api/cart/pay")
        .then(data=>{
            setClientSecret(data.clientSecret)
        })
        .catch(console.log)
    },[])

    return (
        <section className='bg-gray-100'>
            <div className='w-3/4 mx-auto py-10'>
                {items.map(item=>(
                    <article className='flex gap-5 mb-5 items-center'>
                        <img className='w-10 h-10' src={item.images[0]} alt={item.name} />
                        <h4 className='font-bold'>{item.name}</h4>
                        <p>{item.price}</p>
                        <p>{item.amount}</p>
                    </article>
                ))}
            </div>
            {/* Provider */}
            {clientSecret && <Elements options={{
                clientSecret
            }} stripe={stripe}> 
                <PaymentForm/>
            </Elements>}
        </section>
    )
}
