import { deleteDoc, doc } from 'firebase/firestore';
import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext';
import ResultList from './ResultList'
import db from '../FireBase/Firebase';

export default function Result() {
  const {jsonData,setshow,setJsonData}=useContext(AppContext)
  setshow(true)
  console.log(jsonData)
  const renderData=()=>{
   return jsonData.map(data=>
       <ResultList 
         color={data.score>3?"#b7b7a4":"#e76f51"} handleDelete={handleDelete} key={data.id} data={data}/>)
 
  }

async function handleDelete(id){
  const deleteUser=doc(db,"Participant",id)
await deleteDoc(deleteUser)
setJsonData(jsonData.filter(newdata=>
  newdata.id!==id))

}
  return (
    <div>
      {
        jsonData ? 
       renderData()
      
        :<h1>No data to load</h1>
      }
    </div>
  )
}
