import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { post } from '../api'

// login funciona como un action
export const login = createAsyncThunk("auth/login",async (userData,thunkAPI)=>{
    console.log(userData)
    console.log(thunkAPI)

    const data = await post("/api/auth/login",userData)

    return data
})

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
    },
    // Se utilizan para gestionar reducers asíncronos
    // extraReducers:(builder)=>{

    // }
    extraReducers(builder){
        builder.addCase(login.fulfilled,(state,action)=>{
            state.logged = true
            state.user = action.payload.user
        })
        builder.addCase(login.pending,(state,action)=>{
            console.log("Loding...")
        })
        builder.addCase(login.rejected,(state,action)=>{
            console.log("Error...")
        })
    }
    // extraReducers:function(builder){

    // },
    // extraReducers:{
    //     [login.fulfilled]:(state,action)=>{
            
    //     },
    //     [login.pending]:(state,action)=>{

    //     },
    //     [login.rejected]:(state,action)=>{

    //     }
    // }
})

export const {
    // login,
    logout
} = authSlice.actions
export default authSlice.reducer