import React from 'react'
import { NavLink } from 'react-router-dom'

const IconBar = () => {
  return (
    <div>
        <div className="listOfIconBar">
          <li>
            <NavLink to='/'><i className="fas fa-home activado fa-2x">Inicio</i> </NavLink></li>
            
          <li>
            <NavLink to='/friendlist'><i className="fas fa-user-friends fa-2x">Amigos</i> </NavLink></li>

          <li>
            <NavLink to='/events'> <i className="far fa-calendar-alt fa-2x">Eventos</i></NavLink></li>

          <li>
            <NavLink to='/challenge'><i className="fas fa-medal fa-2x">Desafíos</i></NavLink></li>
        </div>
    </div>
  )
}

export default (IconBar)