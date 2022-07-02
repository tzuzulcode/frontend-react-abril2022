import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        // Se recomienda que el estado inicial sea un objeto
        logged:false,
        user:{}
    },
    reducers:{
        // Actions
        login:(state,action)=>{
            // Reducer
            // Programación funcional -> middleware
            // Debido al middleware que se implementa por detras, podemos mutar el estado
            state.logged = true
            state.user = action.payload

            // newState = {
            //     logged:true,
            //     user:{
            //         name:"Tzuzul",
            //         email:"mail@tzuzulcode.com"
            //     }
            // }

            // return newState
        },
        logout:function(state,action){
            state.logged = false
            state.user = {}
        }
    }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer