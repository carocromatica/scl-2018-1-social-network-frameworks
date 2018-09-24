import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from '../nav/SignedInLinks'
import SignedOutLinks from '../nav/SignedOutLinks'
import { connect } from 'react-redux'

const NavLogin = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />; // operador ternario

  return (
    
      <div className="">
      
      
        <span>{links}</span>
      </div>
    
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavLogin)