import React from 'react';
import {Switch, Route} from 'react-router-dom'

import HomePage from "../components/pages/HomePage";
import AnimalsContainer from '../containers/AnimalsContainer'
import BuildingsContainer from '../containers/BuildingsContainer'
import BundlesContainer from '../containers/BundlesContainer'
import CropsContainer from '../containers/CropsContainer'
import FestivalsContainer from '../containers/FestivalsContainer'
import FishContainer from '../containers/FishContainer'
import MineralsContainer from '../containers/MineralsContainer'
import QuestsContainer  from '../containers/QuestsContainer';
import RecipesContainer from '../containers/RecipesContainer'
import ShopsContainer from '../containers/ShopsContainer'
import TreesContainer from '../containers/TreesContainer'
import VillagersContainer from '../containers/VillagersContainer'

import FormsContainer from '../containers/FormsContainer';
import StardewmodForm from '../components/Forms/StardewmodForm'
import AnimalForm from '../components/Forms/AnimalForm';
import BuildingForm from '../components/Forms/BuildingForm';
import BundlesForm from '../components/Forms/BundleForm'
import CropForm from '../components/Forms/CropForm';
import FestivalForm from '../components/Forms/FestivalForm'
import FishForm from '../components/Forms/FishForm'
import MineralForm from '../components/Forms/MineralForm'
import QuestForm from '../components/Forms/QuestForm'
import RecipeForm from '../components/Forms/RecipeForm';
import ShopForm from '../components/Forms/ShopForm'
import TreeForm from '../components/Forms/TreeForm'
import VillagerForm from '../components/Forms/VillagerForm'

const Router = () => {
    
    return(
        <Switch>
            <Route exact path = "/" component = {HomePage} />

            {/* <Route path = '/stardewvalleys/new' component = {StardewmodForm}/> May just make this a consistant component for other forms?*/}

            <Route path = '/animals/new' component = {AnimalForm} />
            <Route path = '/animals' component = {AnimalsContainer} />
        
            <Route path = '/buildings/new' component = {BuildingForm} />
            <Route path = '/buildings' component = {BuildingsContainer} />

            <Route path = '/bundles/new' component = {BundlesForm}/>
            <Route path = '/bundles' component = {BundlesContainer} />

            <Route path = '/crops/new' component = {CropForm} />
            <Route path = '/crops' component = {CropsContainer} />

            <Route path = "/festivals/new" component = {FestivalForm} />
            <Route path = "/festivals" component = {FestivalsContainer} />

            <Route path = '/fish/new' component = {FishForm} />
            <Route path = '/fish' component = {FishContainer} />

            <Route path = '/minerals/new' component = {MineralForm} />
            <Route path = '/minerals' component = {MineralsContainer} />

            <Route path = "/quests/new" component = {QuestForm} />
            <Route path = "/quests" component = {QuestsContainer} />

            <Route path = '/recipes/new' component = {RecipeForm} />
            <Route path = '/recipes' component = {RecipesContainer} />

            <Route path = '/shops/new' component = {ShopForm} />
            <Route path = '/shops' component = {ShopsContainer} />

            <Route path = '/trees/new' component = {TreeForm} />
            <Route path = '/trees' component = {TreesContainer} />

            <Route path = '/villagers/new' component = {VillagerForm} />
            <Route path = '/villagers' component = {VillagersContainer} />
            <Route path = '/forms' component = {FormsContainer} />
        </Switch>
    )
}
export default Router