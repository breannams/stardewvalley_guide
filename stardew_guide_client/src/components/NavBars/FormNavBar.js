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
       <NavLink to = "/stardewvalleys/new" style = {link}>Stardewvalley Mod</NavLink>
        <NavLink to= "/animals/new" style = {link}>Animals</NavLink>
        <NavLink to = "/buildings/new" style = {link}>Buildings</NavLink>
        <NavLink to = "/bundles/new" style = {link}>Buidings</NavLink>
        <NavLink to = "/crops/new" style = {link}>Crops</NavLink>
        <NavLink to = "/festivals/new" style = {link}>Festivals</NavLink>
        <NavLink to = "/fish/new" style = {link}>Fish</NavLink>
        <NavLink to = "/minerals/new" style = {link}>Minerals</NavLink>
        <NavLink to = "/quests/new" style = {link}>Quests</NavLink>
        <NavLink to = "/recipes/new" style = {link}>Recipes</NavLink>
        <NavLink to = "/shops/new" style = {link}>Shops</NavLink>
        <NavLink to = "/trees/new" style = {link}>Trees </NavLink>
        <NavLink to = "/villagers/new" style = {link}>Villagers</NavLink>
        <NavLink to = "/heartevents/new" style = {link}>Heart Event</NavLink>
      </div>
    )
  }

  export default FormNavBar