import React from 'react'
import moment from 'moment'
//import { NavLink } from 'react-router-dom'
import { db } from 'firebase'
import Likes from '../dashboard/likes'
import deleteProject from '../../store/actions/projectDelete'


const PublicationPost = ({publication}) => {
  

  return (

    <div className="card z-depth-0 project-summary" id="challa">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{publication.title}</span>
        <p>foto de perfil</p>
        <p>Posted by {publication.authorFirstName} {publication.authorLastName}</p>
        <p className="grey-text">{moment(publication.createdAt.toDate()).calendar()}</p>
        <p>{publication.content}</p>
        <Likes/>
        <button>
</button>
        
      </div>
    </div>




  )



	

}



export default PublicationPost
