import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
    width: "100px",
    padding: "13px",
    margin: "0 6px 6px",
    background: "grey",
    textDecoration: "none",
    color: "white",
  };


  const NavBar = () => {
    return(
      <div className = "Nav">
       
        <NavLink to= "/animals" style = {link}>Animals</NavLink>
        <NavLink to = "/buildings" style = {link}>Buildings</NavLink>
        <NavLink to = "/bundles" style = {link}>Buidings</NavLink>
        <NavLink to = "/crops" style = {link}>Crops</NavLink>
        <NavLink to = "/festivals" style = {link}>Festivals</NavLink>
        <NavLink to = "/fish" style = {link}>Fish</NavLink>
        <NavLink to = "/minerals" style = {link}>Minerals</NavLink>
        <NavLink to = "/quests" style = {link}>Quests</NavLink>
        <NavLink to = "/recipes" style = {link}>Recipes</NavLink>
        <NavLink to = "/shops" style = {link}>Shops</NavLink>
        <NavLink to = "/trees" style = {link}>Trees </NavLink>
        <NavLink to = "/villagers" style = {link}>Villagers</NavLink>
        <NavLink to = "/forms" style = {link}>Add new Game Components</NavLink>
      </div>
    )
  }

  export default NavBar