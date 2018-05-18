import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBK7LvRm5_zkJ5H6n50J8DRGoCOX9N3vFo",
    authDomain: "notes-3d611.firebaseapp.com",
    databaseURL: "https://notes-3d611.firebaseio.com",
    projectId: "notes-3d611",
    storageBucket: "",
    messagingSenderId: "722442476409"
  };
  firebase.initializeApp(config);

function getFirebaseRef(refPath) {
  return firebase.database().ref(refPath);
}

export default {
  getFirebaseRef: getFirebaseRef
};