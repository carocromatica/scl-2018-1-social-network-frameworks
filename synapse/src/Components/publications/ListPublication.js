import React from 'react'
import PublicationPost from './PublicationPost'
import CreatePublication from './CreatePublication'

const ListPublication = ({publications}) => {
  return (

   
    <div className="">

     <CreatePublication />
      { publications && publications.map(publication => {
        return (
         
            <PublicationPost publication={publication} />
       
        )
      })}  
    </div>
  )
}

export default ListPublication
