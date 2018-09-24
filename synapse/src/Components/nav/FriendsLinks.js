import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css';
import '../friends/Friends';

const FriendsLinks = () => {
  return (
    <div>
      
        <NavLink to='../friends/Friends.js'>Amigos</NavLink>
      
    </div>
  )
}

export default FriendsLinks