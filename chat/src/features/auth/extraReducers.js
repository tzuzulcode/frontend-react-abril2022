import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from '../../api'

// login funciona como un action
export const login = createAsyncThunk("auth/login",async (userData,{fulfillWithValue,rejectWithValue})=>{
    return post("/api/auth/login",userData)
    .then(fulfillWithValue)
    .catch(rejectWithValue)
})

export const validate = createAsyncThunk("auth/validate",async ()=>{
    const data = await get("/api/auth/validate")
    return data.user
})

export const logout = createAsyncThunk("auth/logout",async ()=>{
    const data = await get("/api/auth/logout")
    console.log(data)
    return data.user
})

const authExtraReducers = (builder)=>{
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

    builder.addCase(validate.fulfilled,(state,action)=>{
        state.logged = true
        state.user = action.payload
    })

    builder.addCase(logout.fulfilled,(state,action)=>{
        state.logged = false
        state.user = {}
    })
}

export default authExtraReducers