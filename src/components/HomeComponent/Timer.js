import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [seconds, setSeconds]=useState(30);
    const [minutes, settMinutes]=useState(0);

useEffect(()=>{
   const timer=setInterval(()=>{
        setSeconds(seconds-1);
        if(seconds===0){
            setSeconds(30);

        }
    },1000)
    return()=>clearInterval(timer)
})

  return (
    <div>
        <h1>Timer</h1>
{minutes}:{seconds}
    </div>
  )
}
