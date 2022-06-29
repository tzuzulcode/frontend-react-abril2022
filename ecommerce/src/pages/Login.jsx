import React, { useContext, useState } from 'react'
import { post } from '../api'
import Errors from '../components/Errors'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookSquare} from 'react-icons/fa'
import { authContext } from '../context/Auth'
import { useNavigate } from 'react-router-dom'
import { baseURL } from '../config'

export default function Login() {

    const {setUser} = useContext(authContext)

    const navigate = useNavigate()

    const [errors,setErrors] = useState({
        isErrors:false,
        errors:[]
    })

    // State form
    const [data,setData] = useState({
        email:"",
        password:""
    })

    const handleFormChange = (event)=>{
        // console.log(event.target)
        const {name,value} = event.target
        setData({
            ...data,
            [name]:value
        })
    }

    const login = (event)=>{
        event.preventDefault()
        // const {email,password} = event.target

        post("/api/auth/login",data).then(({user})=>{
            setUser({type:'LOGIN',payload:user}) //dispatch
            navigate("/")
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
            <a className='flex items-center gap-3 bg-gray-200 w-max mx-auto p-3 my-10 shadow-md' href={`${baseURL}/api/auth/google`}><FcGoogle/> Iniciar sesión con Google</a>
            <a className='flex items-center gap-3 bg-gray-200 w-max mx-auto p-3 my-10 shadow-md' href={`${baseURL}/api/auth/facebook`}><FaFacebookSquare/> Iniciar sesión con Facebook</a>
            <form className='bg-gray-200 p-5 w-1/2 mx-auto flex flex-col gap-5 shadow-md' onSubmit={login}>
                <input className='p-2 shadow-md' type="email" name="email" value={data.email} onChange={handleFormChange} />
                <input className='p-2 shadow-md' type="password" name="password" value={data.password} onChange={handleFormChange} />
                <button className=' bg-blue-400 p-2'>Iniciar sesión</button>
            </form>
            <Errors errors={errors}/>
        </>
    )
}
