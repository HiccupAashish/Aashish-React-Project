
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Result from './components/Result';
import Game from './components/Game';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [question, setQuestion]=useState();
  const [score,setScore]=useState();
  const [name,setName]= useState("");

 async function fetchQuestion(){
const res=await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple');
const data=await res.json();

setQuestion(data.results);
  }
  
  return (
    <div className="App">
      <Router>
      <Header/>
      <div className='jumbotron'>
      <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Game' element={<Game question={question} name={name}setName={setName} fetchQuestion={fetchQuestion}/>}></Route>
      <Route path='/Result' element={<Result/>}></Route>
      <Route path='/quiz' element={
      <Quiz
      name={name}
      setQuestion={setQuestion}
      fetchQuestion={fetchQuestion}
      score={score}
      setScore={setScore}
      question={question}
      />
      }>
      

      </Route>
   
      </Routes>
      </div>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
