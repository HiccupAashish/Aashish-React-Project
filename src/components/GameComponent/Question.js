import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Question({
  currQues,
  setCurrQues,
  setId,
  id,
  name,
  setName,
  question,
  quizname,
  options,
  correct,
  score,
  setScore,
  setQuestion,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [seconds, setSeconds] = useState(10);
  const [minutes, settMinutes] = useState(0);
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
    setError(false);
    setSelected(e.target.value);
  }
  useEffect(() => {
    if (selected === correct) setScore(score + 1);
  }, [selected]);

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8009/User/${id}`);
    const data = await res.json();
    return data;
  };

  const handleScore = async (id) => {
    const scoretoggle = await fetchTask(id);
    console.log(scoretoggle);

    const updScore = { ...scoretoggle, score: score };
    console.log(updScore);
    const res = await fetch(`http://localhost:8009/User/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updScore),
    });

    const data = await res.json();
    setName(
      name.map((names) =>
        names.id === id ? { ...names, score: data.score } : names
      )
    );
  };

  async function handleQuitter() {
    alert("Are you sure you want to quit?");
    await fetch(`http://localhost:8009/User/${id}`, {
      method: "DELETE",
    });
    navigate("/game");
    setSelected();
  }

  function handleNext() {
    if (currQues > 3) {
      handleScore(id);
      setSelected();
      navigate("/Result");
    } else if (selected) {
      setSeconds(10);
      setCurrQues(currQues + 1);
      setSelected();
    }
  }

  return (
    <>
      <h2>Q{currQues + 1}</h2>
      <div className="jumbotron" style={{ backgroundColor: "#ddbea9" }}>
        <div
          style={{ width: "100%", marginTop: "10px" }}
          className="btn-danger"
        >
          {" "}
          {minutes}:{seconds}
        </div>
        <div className="QuestionTab">{question[currQues].question}</div>
        <div className="optionstab">
          {options &&
            options.map((option) => (
              <label key={option} style={{ display: "flex" }}>
                <input
                  type="radio"
                  value={option}
                  name="check"
                  onClick={handleCheck}
                />
                {option}
              </label>
            ))}
        </div>
        <div className="Btn">
          {error ? "Select an Option Cunt" : null}

          <button onClick={handleNext}>Next</button>
          <button
            onClick={handleQuitter}
            style={{ backgroundColor: "red", display: "flex", align: "center" }}
          >
            Quit
          </button>
        </div>
      </div>
    </>
  );
}
