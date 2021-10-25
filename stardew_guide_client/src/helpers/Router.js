import { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import HomePage from "../components/pages/HomePage";

// import VillagersContainer from '../containers/VillagersContainer'
// import BuildingsContainer from '../containers/BuildingsContainer'
// import AnimalsContainer from '../containers/AnimalsContainer'
// import FestivalsContainer from '../containers/FestivalsContainer'
// import QuestsContainer from '../containers/QuestsContainer'


export class Router extends Component {
    render(){
 
 
    return(
        <Switch>
            <Route exact path = "/" component = {HomePage} />
{/* 
            <Route path = '/villagers' component = {VillagersContainer} />
            <Route path = '/buildings' component = {BuildingsContainer} />
            <Route path = '/animals' component = {AnimalsContainer} />
            <Route path = "/festivals" component = {FestivalsContainer} />
            <Route path = "/quests" component = {QuestsContainer} /> */}
          
        </Switch>
    )
}}
export default Router