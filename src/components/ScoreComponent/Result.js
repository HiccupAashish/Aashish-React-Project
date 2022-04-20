import React from 'react'
import ResultList from './ResultList'


export default function Result({name,score}) {

  return (
    <div>
      {name.map(names=>
      <ResultList key={names.id} names={names}/>
     
      )}
    </div>
  )
}
