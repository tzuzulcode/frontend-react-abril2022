import React from 'react'
import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";

export default function PaymentForm() {

    const stripe = useStripe();
    const elements = useElements();

    const pay = async (event)=>{
        event.preventDefault()
        const result = await stripe.confirmPayment({
            elements,
            redirect:"if_required"
        });

        console.log(result)

        if(result.paymentIntent.status==="succeeded"){
            alert("Pago exitoso!!!")
            // Limpiar el contexto del carrito
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
