export const bundlesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_BUNDLES':
            return [ ...state ,action.payload]
        default:
        return state
    }

}

export default bundlesReducer