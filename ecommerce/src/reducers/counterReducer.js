export const initialState = {
    counter:0
}

initialState.counter = initialState.counter+1

/**
 * 
 * action: Object(type,payload)
 * 
 */

export default function counterReducer(state,action){
    let newState

    // Proceso de reducción
    switch (action.type) {
        case 'ADD':
            newState = {
                counter: state.counter + 1
            }//nuevo objeto
            break;

        case 'SUB':
            newState = {
                counter: state.counter - 1
            }
            break;
    
        default:
            newState = {
                counter:state.counter
            }
            break;
    }

    return newState
}