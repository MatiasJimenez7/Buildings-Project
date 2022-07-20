import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../../img/1431098283_691735_1431098420_noticia_normal.jpg"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='contenedor-navbar'>
      <div>
        <NavLink to="/"><img src={img} alt="image" /></NavLink>
      </div>
      <div className='navegacion'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="#">Catalogue</NavLink>
        <NavLink to="#">Information</NavLink>
      </div>
    </div>
  )
}

export default NavBar;