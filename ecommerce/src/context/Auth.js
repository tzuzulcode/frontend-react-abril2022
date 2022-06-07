import React,{createContext,useReducer} from 'react'
import authReducer, { initialState } from '../reducers/authReducer'

export const authContext = createContext()

export default function Auth({children}) {

    // const [user,setUser] = useState({
    //     logged:false,
    //     user:{}
    // })

    const [state,dispatch] = useReducer(authReducer,initialState)

    return <authContext.Provider value={{
        user:state.user,
        logged:state.logged,
        setUser:dispatch
    }}>
        {children}
    </authContext.Provider>
}
