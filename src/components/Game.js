import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
// import Footer from './Footer';
// import Quiz from './Quiz';

export default function Game({setName,question,fetchQuestion,name}) {
    const [error, setError]=useState(false)
    const navigate=useNavigate();
function handleSubmit(){
    if(!name){
        setError(true);
        return;
    }
    else{
        setError(false)
        fetchQuestion();
        
        navigate("/quiz")
    }
}
  return (
    <div>
       <h2>Welcome to the Game</h2> 
       <div className='user-data'>
           {error && <h3>Fill in the details cunt</h3>}
           <label htmlFor='username'>Enter your name</label>
        <input type="text" name='username' onChange={(e)=>setName(e.target.value)}></input>
       </div>
      <button onClick={handleSubmit}>Start</button> 
  
    </div>
  )
}
