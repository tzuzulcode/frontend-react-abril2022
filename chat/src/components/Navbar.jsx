import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../features/auth/extraReducers'

export default function Navbar() {
    // const {user,logged} = useSelector((state)=>{
    //     return state.auth
    // })
    const {logged,user} = useSelector(state=>state.auth) // funcion que nos permite leer del estado global
    const dispatch = useDispatch()

    const handleLogout = ()=>{
        dispatch(logout())
    }
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                {logged&&<>
                    <li onClick={handleLogout}>{user.name}</li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/chats">Chats</Link></li>
                </>}
            </ul>
        </nav>
    )
}
