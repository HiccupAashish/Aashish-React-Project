import { deleteDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";
import db from "../FireBase/Firebase";
import Option from "./Option";
import Timer from "./Timer";
import { doc } from "firebase/firestore";

export default function Question({ currQues, setCurrQues, options, correct }) {
  const { setScore, score, id, setJsonData, jsonData, question, name } = useContext(AppContext);
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [seconds, setSeconds] = useState(10);
  const navigate = useNavigate();
 
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 1) {
        if (currQues > 3) {
          setSelected();
          handleScore(id);
          navigate("/Result");
        }
        setCurrQues(currQues + 1);
        handleScore(id);
        setSelected();
        setSeconds(10);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  //

  function handleCheck(e) {
    setSelected(e.target.value);
    setError(false)
  }

  useEffect(() => {
    if (selected === correct) setScore(score + 1);
    console.log("effect triggered")
  }, [selected]);

  const handleScore = async (id) => {
    console.log("handleScoretriggered")
    const increaseScore=doc(db,"Participant",id)
    await updateDoc(increaseScore,{score:score})
    setJsonData(
        jsonData.map((data) =>
          data.id === id
            ? {
                ...data,
                score: score,
              }
            : data
        )
      );
     setScore(0) 
  };

  async function handleQuitter(id) {
    alert("Are you sure you want to quit?");
    const deletedUser = doc(db, "Participant", id);
    await deleteDoc(deletedUser);
    navigate("/game");
    setSelected();
  }

  function handleNext() {
    
  if (currQues > 3) {
      handleScore(id);
      setSelected();
      navigate("/Result");
    } 
    else if (selected){  

      setSeconds(10);
      setCurrQues(currQues + 1);
      setSelected();
    }
    else if (!selected){
    setError(true)
    }
  }

  return (
    <>
      <h2> Q {currQues + 1} </h2>{" "}
      <div
        className="jumbotron"
        style={{
          backgroundColor: "#ddbea9",
        }}
      >
        <Timer  seconds={seconds} />
        <div className="QuestionTab">{question[currQues].question}</div>
        <div className="optionstab">
          {options &&
            options.map((option) => (
              <Option key={option} option={option} handleCheck={handleCheck} />
            ))}
        </div>
        <div className="Btn">
          {error && <h1> Select an Option Cunt</h1> }
          <button onClick={handleNext}> Next </button>
          <button
            onClick={() => handleQuitter(id)}
            style={{
              backgroundColor: "red",
              display: "flex",
              align: "center",
            }}
          >
            Quit
          </button>
        </div>
      </div>
    </>
  );
}
