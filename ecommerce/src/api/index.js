import axios from "axios"


const instance = axios.create({
    baseURL:"https://backendnodejstzuzulcode.uw.r.appspot.com"
})


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


export {
    post
}