import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    databaseURL: 'https://aw-corporate.firebaseio.com/'
  })
}

export default firebase
