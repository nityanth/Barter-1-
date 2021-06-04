
import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyB03AguMlmuSrV6j0qa5_xjvE04iV6SRiQ",
    authDomain: "barter-system-10c00.firebaseapp.com",
    projectId: "barter-system-10c00",
    storageBucket: "barter-system-10c00.appspot.com",
    messagingSenderId: "490335070762",
    appId: "1:490335070762:web:20bf40f0e024a8f1acf153"
  }
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();