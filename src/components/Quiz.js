import React, { useEffect, useState } from 'react'
import Question from './Question';

export default function Quiz({ name, setQuestion,fetchQuestion,score,setScore,question}){
  const [options,setOptions]= useState();
  const [currQues,setCurrQues]=useState(0);
  
  useEffect(()=>{
 console.log(question);
 setOptions(question && 
  Shuffle([question[currQues]?.correct_answer,
    ...question[currQues]?.incorrect_answers,]));
    },[question])

   
function Shuffle(shuffledata){
return shuffledata.sort(()=> Math.random()-0.5)
}
console.log(options)
  return (
    <div >
      Welcome {name}
      {question?
      <>
    <Question
    currQues={currQues}
    setCurrQues={setCurrQues}
    question={question}
    options={options}
    correct={question[currQues]?.correct_answer}
    score={score}
    setScore={setScore}
    setQuestion={setQuestion}/>

    </>:
    <div className="spinner-border"  role="status">
  <span class="sr-only">Loading...</span>
</div>
}

    </div>
  )
}
