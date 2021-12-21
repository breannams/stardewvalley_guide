import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
    width: "100px",
    padding: "10px",
    margin: "0 5px 5px",
    background: "lightblue",
    textDecoration: "none",
    color: "black",
  };


  const FormNavBar = () => {
    return(
      <div className = "Nav">
       <NavLink to = "/forms/stardewvalleys/new" style = {link}>Stardewvalley Mod</NavLink>
        <NavLink to= "/forms/animals/new" style = {link}>Animals</NavLink>
        <NavLink to = "/forms/buildings/new" style = {link}>Buildings</NavLink>
        <NavLink to = "/forms/bundles/new" style = {link}>Bundles</NavLink>
        <NavLink to = "/forms/crops/new" style = {link}>Crops</NavLink>
        <NavLink to = "/forms/festivals/new" style = {link}>Festivals</NavLink>
        <NavLink to = "/forms/fish/new" style = {link}>Fish</NavLink>
        <NavLink to = "/forms/minerals/new" style = {link}>Minerals</NavLink>
        <NavLink to = "/forms/quests/new" style = {link}>Quests</NavLink>
        <NavLink to = "/forms/recipes/new" style = {link}>Recipes</NavLink>
        <NavLink to = "/forms/shops/new" style = {link}>Shops</NavLink>
        <NavLink to = "/forms/trees/new" style = {link}>Trees </NavLink>
        <NavLink to = "/forms/villagers/new" style = {link}>Villagers</NavLink>
        <NavLink to = "/forms/heartevents/new" style = {link}>Heart Event</NavLink>
      </div>
    )
  }

  export default FormNavBar