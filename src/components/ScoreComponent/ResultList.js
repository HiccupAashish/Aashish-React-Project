import React from 'react'

export default function ResultList({names}) {
  return (
    <div style={{backgroundColor:"#d8e2dc",border:"2px solid black"}} className="jumbotron">
  <h3 style={{textAalign:"left"}}>{names.name}</h3>
  <h4 style={{textAlign:"right"}}> {names.score}</h4>
    </div>
  )
}
