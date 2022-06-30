import axios from "axios"
import {baseURL} from "../config"


const instance = axios.create({
    // baseURL:"https://backendnodejstzuzulcode.uw.r.appspot.com"
    baseURL
})

async function get(url){
    try {
        const result = await instance.get(url,{
            withCredentials:true
        })

        return result.data
    } catch (error) {
        throw error.response.data
    }
}

async function post(url,data){
    try {
        const result = await instance.post(url,data,{
            withCredentials:true
        })
    
        return result.data
    } catch (error) {
        throw error.response.data
    }
}

async function put(url,data){
    try {
        const result = await instance.put(url,data,{
            withCredentials:true
        })
    
        return result.data
    } catch (error) {
        throw error.response.data
    }
}

async function del(url,data){
    try {
        const result = await instance.delete(url,{
            data,
            withCredentials:true
        })
    
        return result.data
    } catch (error) {
        throw error.response.data
    }
}


export {
    get,
    post,
    put,
    del
}