import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyBCSjnqafARd1Kb7uYWGt_wWbcC9yShvJo",
    authDomain: "fireblogs-b2639.firebaseapp.com",
    projectId: "fireblogs-b2639",
    storageBucket: "fireblogs-b2639.appspot.com",
    messagingSenderId: "102849728173",
    appId: "1:102849728173:web:267fb7d290f1b4b5d08024",
    measurementId: "G-4GPBZ6NT7L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();