export const initialState = {
    items:[]
}

export default function cartReducer(state,action){
    let newState

    switch (action.type) {
        case 'UPDATE':
            let items = action.payload.map(item=>({amount:item.amount,...item._id}))
            newState = {
                items
            }
            break;
        default:
            newState = {
                ...state
            }
            break;
    }

    return newState
}