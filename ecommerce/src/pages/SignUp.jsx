import React, { useContext, useState } from 'react'
import { post } from '../api'
import Errors from '../components/Errors'
import { authContext } from '../context/Auth'
import {FaFacebookSquare} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import {baseURL} from '../config'

export default function SignUp() {

    const {setUser} = useContext(authContext)
    const navigate = useNavigate()

    const {onChange,value,type} = useInput("text","")
    const email = useInput("email","")
    const password = useInput("password","")

    const [errors,setErrors] = useState({
        isErrors:false,
        errors:[]
    })

    const signup = (event)=>{
        event.preventDefault()

        post("/api/auth/signup",{
            email:email.value,
            password:password.value,
            name:value
        }).then(({user})=>{
            setUser({type:'SIGNUP',payload:user})
            navigate("/")
        })
        .catch(error=>{
            console.log(error)
            setErrors({
                isErrors:true,
                errors:error.errors.map(e=>e.message)
            })
        })

    }

    return (
        <>
            <a 
                className='flex items-center gap-3 bg-gray-200 w-max mx-auto p-3 my-10 shadow-md' 
                href={`${baseURL}/api/auth/google`}>
                    <FcGoogle/> Iniciar sesión con Google
            </a>
            <a
                className='flex items-center gap-3 bg-gray-200 w-max mx-auto p-3 my-10 shadow-md'
                href={`${baseURL}/api/auth/facebook`}>
                    <FaFacebookSquare/> Iniciar sesión con Facebook
            </a>
            <form className='bg-gray-200 p-5 w-1/2 mx-auto flex flex-col gap-5 shadow-md' onSubmit={signup}>
                <input className='p-2 shadow-md' type={type} value={value} onChange={onChange} placeholder='Name...'/>
                <input className='p-2 shadow-md' placeholder='Email...' {...email} />
                <input className='p-2 shadow-md' placeholder='Password...' {...password} />
                <button className=' bg-blue-400 p-2'>Registrarse</button>
            </form>
            <Errors errors={errors}/>
        </>
    )
}
