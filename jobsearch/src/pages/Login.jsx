import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from '../api'
import { authContext } from '../Context/AuthContext'

export default function Login() {

    const context = useContext(authContext)

    const navigate = useNavigate()

    const email = useRef()
    const password = useRef()

    // Login de usuarios
    const login = (event) =>{
        event.preventDefault()

        post("/api/auth/login",{ // Peticion de login
            email: email.current.value,
            password:password.current.value
        })
        .then(data=>{
            const {token,user} = data.data
            localStorage.setItem("token",token) // Guardamos el token que recibimos
            context.setAuth({
                id:user.id,
                name:user.name,
                logged:true
            })
            navigate("/",{
                replace:true
            })
        })

    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <input ref={email} placeholder='Email...' type="email" />
            <input ref={password} placeholder='Password...' type="password" />

            <button>Login</button>
        </form>
    </div>
  )
}
