import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuXAuGYaIG7SQsszLmMVrBs7mwuUe9HUE",
  authDomain: "react-quiz-project-837d9.firebaseapp.com",
  databaseURL: "https://react-quiz-project-837d9-default-rtdb.firebaseio.com",
  projectId: "react-quiz-project-837d9",
  storageBucket: "react-quiz-project-837d9.appspot.com",
  messagingSenderId: "511221511583",
  appId: "1:511221511583:web:c9eb1bc97155ff3086b9aa",
  measurementId: "G-GT5PNLKXY8",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
