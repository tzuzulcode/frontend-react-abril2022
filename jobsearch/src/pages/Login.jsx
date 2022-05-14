import React, { useContext, useRef } from 'react'
import { authContext } from '../Context/AuthContext'

export default function Login() {

    const context = useContext(authContext)

    const email = useRef()
    const password = useRef()

    const login = (event) =>{
        event.preventDefault()
        fetch("http://localhost:4000/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email: email.current.value,
                password:password.current.value
            })
        }).then(res=>res.json())
        .then(data=>{
            localStorage.setItem("token",data.token)
            context.setAuth({
                id:data.user.id,
                name:data.user.name,
                logged:true
            })

            fetch("http://localhost:4000/api/users",{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("token")
                }
            })
            .then((response)=>{
                return response.json()
            })
            .then(data=>{
                console.log(data)
            })
        })
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
