import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { get } from '../api'
import { authContext } from '../context/Auth'
import { cartContext } from '../context/Cart'

export default function Navbar() {
    const {user,logged,setUser} = useContext(authContext)
    const {items} = useContext(cartContext)
    const navigate = useNavigate()

    const logout = () =>{
        get("/api/auth/logout")
        .then(result=>{
            console.log(result)
            setUser({type:'LOGOUT'})
            navigate("/")
        })
    }
    
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/callback">useCallback</Link></li>
                <li><Link to="/hooks">Hooks</Link></li>
                <li><Link to="/transition">Transition</Link></li>
                {
                    !logged?<>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>:
                    <>
                        <li>{user.name}</li>
                        <li><button onClick={logout}>Log out</button></li>
                        {console.log(items)}
                        <li><Link to="/cart">Carrito: {items.length}</Link></li>
                    </>
                }
                
            </ul>
        </nav>
    )
}
