import React, { Component } from 'react'
import ListPublication from '../publications/ListPublication'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Dashboard extends Component {
  render() {
    const { publications, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m10 offset-m1 l6 offset-l3">
            <ListPublication publications={publications} />
          </div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    publications: state.firestore.ordered.publications,
    auth: state.firebase.auth,

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'publications', orderBy: ['createdAt', 'desc']},
  ])
)(Dashboard)
