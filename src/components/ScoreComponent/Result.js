import React from 'react'
import ResultList from './ResultList'


export default function Result({name,score}) {
async function handleDelete(id){
  await fetch(`http://localhost:8009/User/${id}`, {
    method: "DELETE",
  });

}
  return (
    <div>
      {name.map(names=>
      <ResultList handleDelete={handleDelete} key={names.id} names={names}/>
     
      )}
    </div>
  )
}
