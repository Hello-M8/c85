import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB3LvKTlCRG4FIdYGtWF_U1hUZRTg6hFfg",
  authDomain: "bicycle-c4658.firebaseapp.com",
  projectId: "bicycle-c4658",
  storageBucket: "bicycle-c4658.appspot.com",
  messagingSenderId: "1036200968679",
  appId: "1:1036200968679:web:39799f319fb94ebe713d42"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
