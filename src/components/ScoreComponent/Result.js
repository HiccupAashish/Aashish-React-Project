import React from 'react'
import ResultList from './ResultList'


export default function Result({name,setName,score}) {
async function handleDelete(id){
  await fetch(`http://localhost:8009/User/${id}`, {
    method: "DELETE",
  });
setName(name.filter(names=> 
  names.id!==id))
}
  return (
    <div>
      {name.map(names=>
      <ResultList handleDelete={handleDelete} color={names.score>3?"#b7b7a4":"#e76f51"} key={names.id} names={names}/>
     
      )}
    </div>
  )
}
