import React, { useRef } from 'react'

export default function Login() {

    const email = useRef()
    const password = useRef()

    const login = (event) =>{
        event.preventDefault()
        fetch("http://localhost:4000/api/auth/login",{
            method:"POST",
            body:{
                email: email.current.value,
                password:password.current.value
            }
        }).then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
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
