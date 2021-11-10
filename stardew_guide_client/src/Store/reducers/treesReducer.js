export const treesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_TREES':
            return [ ...state ,action.payload]
        default:
        return state
    }

}

export default treesReducer