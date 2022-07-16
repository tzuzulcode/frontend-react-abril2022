import authExtraReducers from "./extraReducers";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        // Se recomienda que el estado inicial sea un objeto
        logged:false,
        user:{}
    },
    reducers:{
        logout:function(state,action){
            state.logged = false
            state.user = {}
        }
    },
    extraReducers:authExtraReducers   
})

export const {
    // login,
    logout
} = authSlice.actions
export default authSlice.reducer