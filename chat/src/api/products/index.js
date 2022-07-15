const endpoints = (builder)=>{
    return {
        getProducts: builder.query({
            query: ()=>"/api/products"
        }),
        getProduct: builder.query({
            query: (id)=>"/api/products/one/"+id
        })
    }
}

export default endpoints