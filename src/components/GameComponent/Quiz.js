import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Contexts/AppContext";
import Question from "./Question";

export default function Quiz() {
  const{question,quizname,setshow}=useContext(AppContext)
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
 setshow(false)
  useEffect(() => {
    
    setOptions(
      question &&
        Shuffle([
          question[currQues]?.correct_answer,
          ...question[currQues]?.incorrect_answers,
        ])
    );
  }, [question, currQues]);

  function Shuffle(shuffledata) {
    return shuffledata.sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      Welcome {quizname}
      {question ? (
        <>
          <Question
        options={options}
            correct={question[currQues]?.correct_answer}
            currQues={currQues}
            setCurrQues={setCurrQues}
          
          />
        </>
      ) : (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}
