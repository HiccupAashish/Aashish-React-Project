import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";
import { addDoc } from "firebase/firestore";
import db from "../FireBase/Firebase";
import { collection,doc,getDocs} from "firebase/firestore"

export default function Game({}) {
  const {
    setQuestion,
    setQuizname,
    setId,
  } = useContext(AppContext);
  const resultCollectionRef=collection(db,"Participant")
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const NameRef = useRef();

  async function fetchQuestion() {
    const res = await fetch(
      "https://raw.githubusercontent.com/HiccupAashish/Quiz-Database/main/User.json"
    );
    const data = await res.json();
    console.log(data);

    setQuestion(data.results);
  }
  async function handleName() {
    const username = NameRef.current.value;
   const b= await addDoc(resultCollectionRef,{Name: username, score:Number(0)})
  console.log(b.id)
  setId(b.id)
   setQuizname(username);
   NameRef.current.value= null ;
  }

  function handleSubmit() {
    if (!NameRef.current.value) {
      setError(true);
    } else {
      setError(false);
      handleName();
      fetchQuestion();
      navigate("/quiz");
    }
  }
  return (
    <div>
      <h2>Welcome to the Game</h2>
      <div className="user-data">
        {error && <h3> Please enter your name</h3>}
        <label htmlFor="username">Enter your name</label>
        <input ref={NameRef} type="text" name="username"></input>
      </div>
      <button onClick={handleSubmit}>Start</button>
    </div>
  );
}
