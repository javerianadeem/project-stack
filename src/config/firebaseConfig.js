import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDb0uTHYMvyog_MJfdczJKbI5rnGJ4GXSM",
    authDomain: "project-stack-2b2bd.firebaseapp.com",
    databaseURL: "https://project-stack-2b2bd.firebaseio.com",
    projectId: "project-stack-2b2bd",
    storageBucket: "project-stack-2b2bd.appspot.com",
    messagingSenderId: "418927639634"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase