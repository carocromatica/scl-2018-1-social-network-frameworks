import { db } from 'firebase'
import {key} from 'firebase'
import {id} from 'firebase'
export const deleteProject = (project) => {

  return (dispatch, {getFirestore}) => {
    
    db.collection('projects').doc(project.id).delete({
      ...project,
   
    })
  }

  
};