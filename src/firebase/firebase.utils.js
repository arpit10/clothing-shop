import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAJAwa-w05e6tjqyDCMXN0JxaR-pHg31OU",
    authDomain: "shopping-ws-db.firebaseapp.com",
    projectId: "shopping-ws-db",
    storageBucket: "shopping-ws-db.appspot.com",
    messagingSenderId: "711359057070",
    appId: "1:711359057070:web:6e41fe4ca6e13a8de5713f",
    measurementId: "G-CC4GYEG79N"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;