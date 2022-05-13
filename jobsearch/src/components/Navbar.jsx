import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../Context/AuthContext'

export default function Navbar() {
    const context = useContext(authContext)
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            {!context.auth.logged&&<li><Link to="/login">Login</Link></li>}
            {!context.auth.logged&&<li><Link to="/signup">Sign up</Link></li>}
            {context.auth.logged&&<li>{context.auth.name}</li>}
        </ul>
    </nav>
  )
}
