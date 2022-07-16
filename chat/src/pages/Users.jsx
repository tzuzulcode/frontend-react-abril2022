import React from 'react'
import { api } from '../api/query'

export default function Users() {
    const {data:users,error,isLoading} = api.useGetUsersQuery()
    
    return (
        <>
            <h1>Users</h1>
            {users?.map(user=><article key={user._id}>
                <p>{user.name}</p>
                <button>Agregar contacto</button>
            </article>)}
        </>
    )
}
