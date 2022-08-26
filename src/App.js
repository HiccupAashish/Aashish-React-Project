import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/HeaderConponent/header";
import Home from "./components/HomeComponent/Home";
import Result from "./components/ScoreComponent/Result";
import Game from "./components/GameComponent/Game";
import Quiz from "./components/GameComponent/Quiz";
import Footer from "./components/FooterComponent/Footer";
import { AppContext } from "./components/Contexts/AppContext";
import db from "./components/FireBase/Firebase";
import { collection,getDocs} from "firebase/firestore";

function App() {
  const { quizname, show, setJsonData } = useContext(AppContext);

  const resultCollectionRef=collection(db,"Participant")
  async function GrabDatabase() {
    const result=await getDocs(resultCollectionRef)
    setJsonData(result.docs.map((doc)=>({...doc.data(),id:doc.id})))
  }
  useEffect(() => {
    GrabDatabase();
    console.log("effect Triggered")
  }, [quizname]);


  return (
    <div className="App">
      <Router>
        {show && <Header />}
        <div className="jumbotron">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Game" element={<Game />} />
            <Route path="/Result" element={<Result />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
