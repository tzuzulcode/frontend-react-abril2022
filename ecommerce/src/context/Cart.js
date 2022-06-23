import React,{createContext,useReducer} from 'react'
import cartReducer, { initialState } from '../reducers/cartReducer'

export const cartContext = createContext()

export default function Cart({children}) {

    const [state,dispatch] = useReducer(cartReducer,initialState)

    return <cartContext.Provider value={{
        items:state.items,
        setItems:dispatch
    }}>
        {children}
    </cartContext.Provider>
}
