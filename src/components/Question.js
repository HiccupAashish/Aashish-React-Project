import React, { useState } from 'react'

export default function Question({ currQues,
    setCurrQues,
    question,
    options,
    correct,
    score,
    setScore,
    setQuestion})
     {
    const[selected,useSelected]=useState()
    const [error,setError]=useState();
    console.log(options)

  return (
    <>
        <h2>Q{currQues +1}</h2>
        <div className="jumbotron" style={{backgroundColor:"#ddbea9"}}>
            <div className='QuestionTab'>
         {question[currQues].question}
         </div>
         <div className='optionstab'>
             { options && options.map((option)=>
                <label key={option} style={{display:"flex"}}>
                <input 
                  type="radio"
                  value="Male"
                  name='check'
                 
                />
            {option}
              </label>

              )}
         </div>
        </div>
    </>
  )
}
