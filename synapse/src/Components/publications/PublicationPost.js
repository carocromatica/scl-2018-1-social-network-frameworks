import React from 'react'
import moment from 'moment'
//import { NavLink } from 'react-router-dom'
import { db } from 'firebase'
import { profile } from 'firebase'
import Likes from '../dashboard/likes'
import deleteProject from '../../store/actions/postDelete'


const PublicationPost = ({ publication }) => {


  return (

    <div className="card z-depth-0" id="challa">
      <div className="card-content grey-text text-darken-3 ">
        <div>
          <div id="avatar"> 
          <span className="btn-floating btn-large waves-effect waves-light blue-grey lighten-3">{publication.authorInitials}</span> 
          </div>
          <div>
            <span className="author"> {publication.authorFirstName} {publication.authorLastName}</span>
            <p className="grey-text">{moment(publication.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
        <p className="post">{publication.content}</p>
        <Likes className="like" />
      </div>
   
     
    </div>




  )





}



export default PublicationPost
