export const fishReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_FISH':
            return [ ...state ,action.payload]
        default:
        return state
    }

}

export default fishReducer