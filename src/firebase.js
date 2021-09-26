import firebase from 'firebase/app'
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCdgPuigcreGjNfR50OGZJE_PJuXBuUHOQ",
    authDomain: "instagram-e69bb.firebaseapp.com",
    databaseURL: "https://instagram-e69bb.firebaseio.com",
    projectId: "instagram-e69bb",
    storageBucket: "instagram-e69bb.appspot.com",
    messagingSenderId: "30661751105",
    appId: "1:30661751105:web:2fdf962e85a5dfb95cf1c0",
    measurementId: "G-QH21NJE67E"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.auth()