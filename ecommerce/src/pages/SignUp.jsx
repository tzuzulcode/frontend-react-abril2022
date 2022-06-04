import React, { useContext, useState } from 'react'
import { post } from '../api'
import Errors from '../components/Errors'
import { authContext } from '../context/Auth'
import {FaFacebookSquare} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const {setUser} = useContext(authContext)
    const navigate = useNavigate()

    const [errors,setErrors] = useState({
        isErrors:false,
        errors:[]
    })

    const signup = (event)=>{
        event.preventDefault()
        const {email,password,name} = event.target

        post("/api/auth/signup",{
            email:email.value,
            password:password.value,
            name:name.value
        }).then(({user})=>{
            setUser({
                logged:true,
                user
            })
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
            <a className='flex items-center gap-3 bg-gray-200 w-max mx-auto p-3 my-10 shadow-md' href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google'><FcGoogle/> Registrarme con Google</a>
            <a className='flex items-center gap-3 bg-gray-200 w-max mx-auto p-3 my-10 shadow-md' href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/facebook'><FaFacebookSquare/> Registrarme con Facebook</a>
            <form className='bg-gray-200 p-5 w-1/2 mx-auto flex flex-col gap-5 shadow-md' onSubmit={signup}>
                <input className='p-2 shadow-md' type="text" name="name" placeholder='Name...'/>
                <input className='p-2 shadow-md' type="email" name="email" placeholder='Email...'/>
                <input className='p-2 shadow-md' type="password" name="password" placeholder='Password...' />
                <button className=' bg-blue-400 p-2'>Registrarse</button>
            </form>
            <Errors errors={errors}/>
        </>
    )
}
