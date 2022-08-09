import firebase from "firebase";
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwO79OnnZV2CzWKzdNWvS7TrxFPHUf-Wk",
    authDomain: "olx-clone-115ec.firebaseapp.com",
    projectId: "olx-clone-115ec",
    storageBucket: "olx-clone-115ec.appspot.com",
    messagingSenderId: "624050048766",
    appId: "1:624050048766:web:9a956a4e63fc79064c9faf",
    measurementId: "G-H8Z697C6QT"
  };


export default firebase.initializeApp(firebaseConfig)