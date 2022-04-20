import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Timer from "./components/HomeComponent/Timer";
import Header from "./components/HeaderConponent/header";
import Home from "./components/HomeComponent/Home";
import Result from "./components/ScoreComponent/Result";
import Game from "./components/GameComponent/Game";
import Quiz from "./components/GameComponent/Quiz";
import Footer from "./components/FooterComponent/Footer";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [quizname, setQuizname] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    UserName();
  }, [quizname]);

  async function UserName() {
    const url = await fetch("http://localhost:8009/User");
    const data = await url.json();
    setName(data);
  }

  async function fetchQuestion() {
    const res = await fetch(
      "https://raw.githubusercontent.com/HiccupAashish/Quiz-Database/main/User.json"
    );
    const data = await res.json();
    console.log(data);

    setQuestion(data.results);
  }

  return (
    <div className="App">
      <Router>
        <Header />

        <div className="jumbotron">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/Game"
              element={
                <Game
                  setQuizname={setQuizname}
                  setId={setId}
                  id={id}
                  question={question}
                  name={name}
                  setScore={setScore}
                  setName={setName}
                  fetchQuestion={fetchQuestion}
                />
              }
            ></Route>
            <Route
              path="/Result"
              element={<Result setId={setId} name={name} score={score} />}
            ></Route>
            <Route
              path="/quiz"
              element={
                <Quiz
                  setId={setId}
                  id={id}
                  quizname={quizname}
                  name={name}
                  setName={setName}
                  setQuestion={setQuestion}
                  fetchQuestion={fetchQuestion}
                  score={score}
                  setScore={setScore}
                  question={question}
                />
              }
            ></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
