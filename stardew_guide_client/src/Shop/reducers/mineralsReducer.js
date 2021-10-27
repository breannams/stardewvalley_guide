export const mineralsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_MINERALS':
            return [ ...state ,action.payload]
        default:
        return state
    }

}

export default mineralsReducer