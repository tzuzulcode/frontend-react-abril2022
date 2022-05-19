import React, { useContext } from 'react'
import { authContext } from '../Context/AuthContext'

export default function LogOut() {

    const context = useContext(authContext)

    const handleLogOut=()=>{
        localStorage.removeItem("token")
        context.setAuth({
            logged:false,
            name:"",
            id:""
        })
    }
    return (
        <button onClick={handleLogOut}>
            Cerrar sesión
        </button>
    )
}
