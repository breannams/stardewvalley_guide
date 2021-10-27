export const recipesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_RECIPES':
            return [ ...state ,action.payload]
        default:
        return state
    }

}

export default recipesReducer