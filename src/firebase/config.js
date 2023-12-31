import firebase from "firebase";
import "firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXCP0eoHtSfMJW4rLNvanwhZQT8kO9MJY",
    authDomain: "cooking-abba0.firebaseapp.com",
    projectId: "cooking-abba0",
    storageBucket: "cooking-abba0.appspot.com",
    messagingSenderId: "20161835059",
    appId: "1:20161835059:web:1d1e6dcc75e132f4dcb346",
    measurementId: "G-N4TQFG3H48"
};

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()


export { firestore }