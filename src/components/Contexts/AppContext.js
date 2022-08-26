import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);
  const [jsonData, setJsonData] = useState([]);
  const [quizname, setQuizname] = useState();
  const [id, setId] = useState();
  const [show, setshow] = useState(true);

  return (
    <AppContext.Provider
      value={{
        question,
        setQuestion,
        jsonData,
        setJsonData,
        score,
        setScore,
        quizname,
        setQuizname,
        id,
        setId,
        show,
        setshow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export { AppContext, AppContextProvider };
