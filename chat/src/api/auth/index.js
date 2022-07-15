const auth = (builder)=>{
    return {
        login: builder.mutation({
            query:(data)=>({
                url:"/api/auth/login",
                method: "POST",
                body:data
            })
        }),
    }
}

export default auth