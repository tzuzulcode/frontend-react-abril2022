import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
    // const {user,logged} = useSelector((state)=>{
    //     return state.auth
    // })
    const {logged,user} = useSelector(state=>state.auth) // funcion que nos permite leer del estado global
    
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                {logged&&<li>{user.name}</li>}
            </ul>
        </nav>
    )
}
