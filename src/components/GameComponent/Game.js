import React, { useRef, useState } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
// import Footer from './Footer';
// import Quiz from './Quiz';

export default function Game({
  setName,
  setId,
  id,
  question,
  fetchQuestion,
  name,
  setScore,
  setQuizname,
}) {
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const NameRef = useRef();

  async function handleName() {
    const username = NameRef.current.value;
    const a = await fetch("http://localhost:8009/User", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: v4(),
        name: `${username}`,
        score: 0,
      }),
    });
    const data = await a.json();
    setId(data.id);

    {
      a.ok && setQuizname(username);
      setScore(0);
    }
  }

  function handleSubmit() {
    if (!name) {
      setError(true);
      return;
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
        {error && <h3>Fill in the details cunt</h3>}
        <label htmlFor="username">Enter your name</label>
        <input ref={NameRef} type="text" name="username"></input>
      </div>
      <button onClick={handleSubmit}>Start</button>
    </div>
  );
}
