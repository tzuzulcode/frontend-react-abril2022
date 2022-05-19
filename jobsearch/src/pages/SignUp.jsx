import React,{useContext, useRef} from 'react'
import { post } from '../api'
import { authContext } from '../Context/AuthContext'

export default function SignUp() {

  const context = useContext(authContext)
  const email = useRef()
  const password = useRef()
  const name = useRef()

  const signup = (event) =>{
      event.preventDefault()
      post("/api/auth/signup",{
        name:name.current.value,
        email: email.current.value,
        password:password.current.value
      })
      .then(({data})=>{
        if(data.error){
          console.log(data)
        }else{
          localStorage.setItem("token",data.token)
          context.setAuth({
            id:data.user.id,
            name:data.user.name,
            logged:true
          })
        }
      })
  }

  const recoverSession = ()=>{
    const token = localStorage.getItem("token")

    if(token){
      fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/validate",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+ token
        },
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.failed){
          console.log(data)
        }else{
          context.setAuth({
            id:data.user.id,
            name:data.user.name,
            logged:true
          })
        }
        
      })
      .catch(error=>console.log(error))
    }
    
  }

  return (
  <div>
      <h1>Login</h1>
      <button onClick={recoverSession}>Recuperar sesión</button>
      <form onSubmit={signup}>
          <input ref={name} placeholder="Nombre..." type="text"/>
          <input ref={email} placeholder='Email...' type="email" />
          <input ref={password} placeholder='Password...' type="password" />

          <button>Login</button>
      </form>
  </div>
)
}
