import axios from 'axios'
import React from 'react'

export default function Login() {

    const login = (event)=>{
        event.preventDefault()
        const {email,password} =event.target
        console.log(email,password)
        axios.post("http://localhost:4000/api/auth/login",{
            email:email.value,
            password:password.value
        },{
            withCredentials:true
        }).then(response=>{
            console.log(response)
        })
        .catch(error=>console.log(error))

    }

    return (
        <>
            <form onSubmit={login}>
                <input className='border border-black' type="email" name="email" />
                <input className='border border-black' type="password" name="password" />
                <button>Iniciar sesión</button>
            </form>

        </>
    )
}
