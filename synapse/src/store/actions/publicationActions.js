export const createPublication = (publication) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('publications').add({
      ...publication,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorInitials:profile.initials, //descubrimiento!
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_ERROR' }, err);
    });
  }
};