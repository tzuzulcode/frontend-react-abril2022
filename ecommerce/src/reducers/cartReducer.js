export const initialState = {
    items:[]
}

export default function cartReducer(state,action){
    let newState

    switch (action.type) {
        case 'ADD_PRODUCT':
            newState = {
                items:action.payload
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