import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDisZxL17e91JiwVcTqemqUR5couQre1S4",
    authDomain: "crwn-clothing-41573.firebaseapp.com",
    databaseURL: "https://crwn-clothing-41573.firebaseio.com",
    projectId: "crwn-clothing-41573",
    storageBucket: "crwn-clothing-41573.appspot.com",
    messagingSenderId: "215418522084",
    appId: "1:215418522084:web:5c4b9e0cc441e622475ff1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  //gives access to provider object from Google Auth Library
  provider.setCustomParameters({ prompt : 'select_account'});
  //always trigger the google account selection popup whenever we implement auth with google

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;