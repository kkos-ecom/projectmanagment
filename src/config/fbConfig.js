import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDH1K_C34ofnt5VMq1MA-RqNi0YwmGCYNg",
    authDomain: "react-redux-projectmanagment.firebaseapp.com",
    databaseURL: "https://react-redux-projectmanagment.firebaseio.com",
    projectId: "react-redux-projectmanagment",
    storageBucket: "react-redux-projectmanagment.appspot.com",
    messagingSenderId: "690983578813",
    appId: "1:690983578813:web:853e72ceff9ce9fd2cdbd4",
    measurementId: "G-D5EW9T65VL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});



  export default firebase;