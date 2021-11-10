export const cropsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CROPS':
            return [ ...state ,action.payload]
        default:
        return state
    }

}

export default cropsReducer