export const shopsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SHOPS':
            return [ ...state ,action.payload]
        default:
        return state
    }

}

export default shopsReducer