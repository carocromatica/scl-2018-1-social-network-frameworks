import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const IconBar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/friendlist'>RENDERIZA</NavLink></li>
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