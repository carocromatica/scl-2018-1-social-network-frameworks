import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import FriendsLinks from './FriendsLinks'
import '../../App.css';
import '../friends/Friends';
import './FriendsLinks';


const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const linkFriends = <FriendsLinks/>
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />; // operador ternario

  return (
    <nav className="nav-wrapper blue-grey darken-4">
      <div className="">
      
        <Link to='/' className="brand-logo">Synapse</Link>
        <span>{links}</span>
        <link to='../friends/Friends.js' className="friends"></link>
        <span className='friends'>{linkFriends}</span>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)