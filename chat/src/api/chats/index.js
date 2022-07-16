const chatsEndpoints = (builder)=>{
    return {
        getChats: builder.query({
            query: ()=>"/api/chats"
        })
    }
}

export default chatsEndpoints