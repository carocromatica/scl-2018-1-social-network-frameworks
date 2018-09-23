import React from 'react'
import moment from 'moment'
//import { NavLink } from 'react-router-dom'
import { db } from 'firebase'
import{ profile } from 'firebase'
import Likes from '../dashboard/likes'
import deleteProject from '../../store/actions/postDelete'


const PublicationPost = ({publication}) => {
  

  return (

    <div className="card z-depth-0 project-summary" id="challa">
      <div className="card-content grey-text text-darken-3">
     
        <p className="btn btn-floating pink lighten-1">{publication.authorInitials}</p>
        <p>{publication.authorFirstName} {publication.authorLastName}</p>
        <p className="grey-text">{moment(publication.createdAt.toDate()).calendar()}</p>
        <p>{publication.content}</p>
        <Likes/>
        
        
      </div>
    </div>




  )



	

}



export default PublicationPost
