import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const IconBar = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/events'>Eventos</NavLink></li>
        <li><NavLink to='/friends'>amigos</NavLink></li>
        <li><NavLink to='/challenge'>desafios</NavLink></li>
      
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(IconBar)