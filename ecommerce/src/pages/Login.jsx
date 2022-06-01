import React, { useState } from 'react'
import { post } from '../api'
import Errors from '../components/Errors'
import {FcGoogle} from 'react-icons/fc'

export default function Login() {

    const [errors,setErrors] = useState({
        isErrors:true,
        errors:[]
    })

    const login = (event)=>{
        event.preventDefault()
        const {email,password} = event.target

        post("/api/auth/login",{
            email:email.value,
            password:password.value
        }).then(response=>{
            console.log(response)
        })
        .catch(error=>{
            setErrors({
                isErrors:true,
                errors:error.errors
            })
        })

    }

    return (
        <>
            <a className='flex items-center gap-3 bg-gray-200 w-max mx-auto p-3 my-10 shadow-md' href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google'><FcGoogle/> Iniciar sesión con Google</a>
            <form className='bg-gray-200 p-5 w-1/2 mx-auto flex flex-col gap-5 shadow-md' onSubmit={login}>
                <input className='p-2 shadow-md' type="email" name="email" />
                <input className='p-2 shadow-md' type="password" name="password" />
                <button className=' bg-blue-400 p-2'>Iniciar sesión</button>
            </form>
            <Errors errors={errors}/>
        </>
    )
}
