import React, { useEffect, useState } from "react";
import Question from "./Question";

export default function Quiz({
  name,
  quizname,
  setId,
  id,
  setName,
  setQuestion,
  fetchQuestion,
  score,
  setScore,
  question,
}) {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

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
            setId={setId}
            id={id}
            name={name}
            setName={setName}
            currQues={currQues}
            setCurrQues={setCurrQues}
            question={question}
            quizname={quizname}
            options={options}
            correct={question[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestion={setQuestion}
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
