import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Friends from './Components/friends/Friends'
import IconBar from '../iconBar/IconBar'
import Navbar from '../nav/Nav'
 
class FriendList extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
     <div>
        <div>
          <Navbar />
      </div>
      <div className="container">
     
        <div className="row">
       
          <div className="col s12 m10 offset-m1 l6 offset-l3">
          <div className="card z-depth-0">
        <IconBar /> holi
        </div>
            <Friends />
          </div>
          
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

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
)(FriendList)
