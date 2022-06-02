import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { authContext } from '../context/Auth'

export default function Navbar() {
    const {user,logged} = useContext(authContext)
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {
                    !logged?<>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>:
                    <>
                        <li>{user.name}</li>
                    </>
                }
                
            </ul>
        </nav>
    )
}
