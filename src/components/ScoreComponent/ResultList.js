import React from 'react'
import "./ResultList.css"
export default function ResultList({data,handleDelete,color}) {
  return (
    <div style={{backgroundColor:color,border:"2px solid black"}} className="jumbotron">
  <h3 style={{textAlign:"left"}}>{data.Name}</h3>
  <h4 style={{textAlign:"right"}}> {data.score}/5</h4>
  <i onClick={()=>handleDelete(data.id)} style={{textAlign:"right", cursor:"pointer"}} className="bi bi-trash3-fill"> Delete History</i>
    </div>
  )
}
