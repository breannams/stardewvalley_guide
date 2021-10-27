import { Component } from 'react';
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

export class Router extends Component {
    render(){
 
 
    return(
        <Switch>
            <Route exact path = "/" component = {HomePage} />
            <Route path = '/animals' component = {AnimalsContainer} />
            <Route path = '/buildings' component = {BuildingsContainer} />
            <Route path = '/bundles' component = {BundlesContainer} />
            <Route path = '/crops' component = {CropsContainer} />
            <Route path = "/festivals" component = {FestivalsContainer} />
            <Route path = '/fish' component = {FishContainer} />
            <Route path = '/minerals' component = {MineralsContainer} />
            <Route path = "/quests" component = {QuestsContainer} />
            <Route path = '/recipes' component = {RecipesContainer} />
            <Route path = '/shops' component = {ShopsContainer} />
            <Route path = '/trees' component = {TreesContainer} />
            <Route path = '/villagers' component = {VillagersContainer} />
        </Switch>
    )
}}
export default Router