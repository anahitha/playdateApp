import firebase from 'firebase'
require ('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyA6SiZ5jxjK6WNX4wzvgsh5Q_AWMmeAnNg",
  authDomain: "playdateapp-50023.firebaseapp.com",
  databaseURL: "https://playdateapp-50023.firebaseio.com",
  projectId: "playdateapp-50023",
  storageBucket: "playdateapp-50023.appspot.com",
  messagingSenderId: "824542242947",
  appId: "1:824542242947:web:097a6724ed8cb1776d13b6"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  export default firebase.firestore()