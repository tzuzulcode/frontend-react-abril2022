import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../features/auth/extraReducers'
// import { api } from '../api/query'

export default function Login() {
    const state = useSelector((state)=>{return state.auth}) //Leer el estado
    const dispatch = useDispatch() // Funcion para actualizar el estado
    // const [login, {isError,isLoading,isSuccess}] = api.useLoginMutation() 

    const handleLogin = async (event)=>{
        event.preventDefault()
        // login(payload)
        // Nota: Solo podemos pasar un parámetro como payload
        const {email,password} = event.target
        dispatch(login({
            email:email.value,
            password:password.value
        }))
    }

    // const handleLogin = (event)=>{
    //     event.preventDefault()
    //     const {email,password} = event.target
    //     login({
    //         email: email.value,
    //         password: password.value
    //     })
    // }

    // const handleLogin = async (event)=>{
    //     event.preventDefault()
    //     // login(payload)
    //     // Nota: Solo podemos pasar un parámetro como payload
    //     try {
    //         const {email,password} = event.target
    //         const data = await post("/api/auth/login",{
    //             email:email.value,
    //             password:password.value
    //         })

    //         dispatch(login(data.user))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
    return (
        <>
            <div>Login</div>
            {state.logged&&<p>{state.user.name}</p>}

            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder='Email...'/>
                <input type="password" name="password" placeholder='Password...'/>
                <button>Log in</button>
            </form>

            {/* {isLoading&&<p>Loading....</p>}
            {isError&&<p>Error....</p>}
            {isSuccess&&<p>Success....</p>} */}
        </>
    )
}
