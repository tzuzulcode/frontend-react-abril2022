import React from 'react'
import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";
import { useContext } from 'react';
import { cartContext } from '../context/Cart';
import {useNavigate} from 'react-router-dom'

export default function PaymentForm() {

    const stripe = useStripe();
    const elements = useElements();
    const {setItems} = useContext(cartContext)
    const navigate = useNavigate()

    const pay = async (event)=>{
        event.preventDefault()
        const result = await stripe.confirmPayment({
            elements,
            redirect:"if_required"
        });

        console.log(result)

        if(result.paymentIntent.status==="succeeded"){
            setItems({
                type:"CLEAR"
            })
            navigate("/")
        }
    }
    return (
        <div>
            <form onSubmit={pay}>
                <PaymentElement id="payment-element"></PaymentElement>
                <button>Pagar</button>
            </form>
        </div>
    )
}
