import React,{useContext, useRef, useState} from 'react'
import { post } from '../api'
import { authContext } from '../Context/AuthContext'

export default function SignUp() {

  const context = useContext(authContext)
  const [error,setError] = useState({
    isError:false,
    message:"",
    loading:false
  })
  const email = useRef()
  const password = useRef()
  const name = useRef()
  const role = useRef()

  const signup = (event) =>{
      event.preventDefault()

      console.log(role.current.value)
      setError({...error,loading:true})
      post("/api/auth/signup",{
        name:name.current.value,
        email: email.current.value,
        password:password.current.value,
        role:role.current.value
      })
      .then(({data})=>{
        setError({...error,loading:false})
        localStorage.setItem("token",data.token)
        context.setAuth({
          id:data.user.id,
          name:data.user.name,
          logged:true
        })
      })
      .catch(error=>{
        console.log(error.response.data)
        setError({
          isError:true,
          message:error.response.data.message,
          loading:false
        })
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
          <select ref={role} defaultValue="applicant">
            <option value="applicant">Applicant</option>
            <option value="employer">Employer</option>
          </select>
          <button>Login</button>
      </form>
      {error.loading&&<p>Cargando.... Espere...</p>}

      {error.isError&&<p>{error.message}</p>}
  </div>
)
}
