import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { post } from '../api'
import { baseURL } from "../config";

// login funciona como un action
export const login = createAsyncThunk("auth/login",async (userData,{fulfillWithValue,rejectWithValue})=>{
    console.log(userData)
    // console.log(thunkAPI)

    // Si hay algún error (excepción), el bloque "rejected" del addCase se ejecuta
    // SI utizamos fetch, no lanza excepciones cuando hay errores 400 o 500. No usar un try.. catch
    // const data = await post("/api/auth/login",userData)
    // return data
    // try {
    //     const data = await post("/api/auth/login",userData)
    //     return data
    // } catch (error) {
    //     Errores 400 al 500 de la peticion entran aquí
    //     console.log(error)
    //     return thunkAPI.rejectWithValue(error)
    // }

    // Haciendolo con fetch:
    // const response = await fetch(baseURL+"/api/auth/login",{
    //     body:JSON.stringify(userData),
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     credentials:"include"
    // })
    // const data = await response.json()
    // console.log(data)
    // if(response.ok){

    //     return data
    // }

    // return thunkAPI.rejectWithValue(data)

    // return post("/api/auth/login",userData)
    // .then(data=>fulfillWithValue(data))
    // .catch(error=>rejectWithValue(error))
    return post("/api/auth/login",userData)
    .then(fulfillWithValue)
    .catch(rejectWithValue)

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
        // login:(state,action)=>{
        //     // Reducer
        //     // Programación funcional -> middleware
        //     // Debido al middleware que se implementa por detras, podemos mutar el estado
        //     state.logged = true
        //     state.user = action.payload

        //     // newState = {
        //     //     logged:true,
        //     //     user:{
        //     //         name:"Tzuzul",
        //     //         email:"mail@tzuzulcode.com"
        //     //     }
        //     // }

        //     // return newState
        // },
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
            console.log(action.payload)
            console.log(action.error)
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