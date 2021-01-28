const ADD = 'cart/ADD';

export const addToCart = (id) => {
    return {
        type: ADD,
        id
    }
}

const cartReducer = (state = {}, action) => {
    switch(action.type){
        case ADD: 
            const newState = { ...state };
            if (!newState[action.id]){
                newState[action.id] = {id: action.id, count:1};
            } else {
                
            }
            return newState
        default:
            return state;
    }
}

export default cartReducer;