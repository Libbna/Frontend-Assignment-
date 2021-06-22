import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkZshEI89DcAEqp4l2mXto2ui_xoJXqLU",
    authDomain: "linkedin-clone-c6d61.firebaseapp.com",
    projectId: "linkedin-clone-c6d61",
    storageBucket: "linkedin-clone-c6d61.appspot.com",
    messagingSenderId: "49780169537",
    appId: "1:49780169537:web:758be94e7b437aec449fc0",
    measurementId: "G-8LF9GRC7T9"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

  
  //THE ABOVE CODE CONNECTS YOU TO A FIREBASE