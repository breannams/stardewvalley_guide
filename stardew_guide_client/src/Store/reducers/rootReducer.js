import {combineReducers} from 'redux'
import animalsReducer from './animalsReducer'
import buildingsReducer from './buildingsReducer'
import bundlesReducer from './bundlesReducer'
import cropsReducer from './cropsReducer'
import festivalsReducer from './festivalsReducer'
import fishReducer from './fishReducer'
import mineralsReducer from './mineralsReducer'
import questsReducer from './questsReducer'
import recipesReducer from './recipesReducer'
import shopsReducer from './shopsReducer'
import treesReducer from './treesReducer'
import villagersReducer from './villagersReducer'

export const rootReducer = combineReducers({
    animals: animalsReducer,
    buildings: buildingsReducer,
    bundles: bundlesReducer,
    crops: cropsReducer,
    festivals: festivalsReducer,
    fish: fishReducer,
    minerals: mineralsReducer,
    quests: questsReducer,
    recipes: recipesReducer,
    shops: shopsReducer,
    trees: treesReducer,
    villagers: villagersReducer
})
export default rootReducer