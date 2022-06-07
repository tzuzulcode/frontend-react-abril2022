export const initialState = {
    logged:false,
    user:{}
}

export default function authReducer(state,action){
    let newState

    switch (action.type) {
        case 'LOGIN':
            newState = {
                logged:true,
                user: action.payload
            }
            break;
        case 'SIGNUP':
            newState = {
                logged:true,
                user: action.payload
            }
            break
        case 'LOGOUT':
            newState = {
                logged:false,
                user: {}
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