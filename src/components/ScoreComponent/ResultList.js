import React from 'react'
import "./ResultList.css"
export default function ResultList({names,handleDelete}) {
  return (
    <div style={{backgroundColor:"#d8e2dc",border:"2px solid black"}} className="jumbotron">
  <h3 style={{textAlign:"left"}}>{names.name}</h3>
  <h4 style={{textAlign:"right"}}> {names.score}</h4>
  <i onClick={()=>handleDelete(names.id)} style={{textAlign:"right", cursor:"pointer"}} className="bi bi-trash3-fill"></i>
    </div>
  )
}
