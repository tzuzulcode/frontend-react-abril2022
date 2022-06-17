import { useDebugValue, useEffect, useState } from "react"

const useFetch = (url)=>{
    useDebugValue(url)
    const [result,setResult] = useState({
        loading:false,
        error:false,
        data:[]
    })
    useDebugValue(result.data)

    useEffect(()=>{
        setResult({
            ...result,
            loading:true
        })
        fetch(url)
        .then(response=>response.json()) //No lanza excepciones en 400
        .then(data=>{
            if(data.error){
                throw "Error"
            }
            setResult({
                loading:false,
                error:false,
                data
            })
            // La actualizacion de el estado se hace en batch (Automatic batching)
        })
        .catch(error=>{
            setResult({
                loading:false,
                error:true,
                data:[]
            })
        })
    },[])


    return [result.data,result.error,result.loading]
}

export default useFetch