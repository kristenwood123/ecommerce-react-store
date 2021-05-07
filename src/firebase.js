import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASbah4sVLP4UNwY2Y7-JjDbrm_2IFUBt8",
    authDomain: "sangin-clone.firebaseapp.com",
    projectId: "sangin-clone",
    storageBucket: "sangin-clone.appspot.com",
    messagingSenderId: "914353208491",
    appId: "1:914353208491:web:84f891377050fdeb84cbee",
    measurementId: "G-467WE095WG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };