const usersEndpoints = (builder)=>{
    return {
        getUsers: builder.query({
            query: ()=>"/api/users"
        })
    }
}

export default usersEndpoints