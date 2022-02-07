import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCD3ywIyvKXpn2gXqTInHgynVDP2UM1o64",
  authDomain: "signin-edunotech.firebaseapp.com",
  projectId: "signin-edunotech",
  storageBucket: "signin-edunotech.appspot.com",
  messagingSenderId: "812352743665",
  appId: "1:812352743665:web:7fbf3e3752cc69345de150"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;