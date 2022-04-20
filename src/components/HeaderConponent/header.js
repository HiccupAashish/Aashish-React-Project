import React from 'react';
import "./Header.css"
import {Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      
       <nav className="navbar navbar-dark ">
       <Link to="/"><img src="favicon_io/android-chrome-192x192.png" style={{height:"30px",width:"30px"}}/> </Link>

           <ul>
             <Link to="/"> <li  >
                   Home
               </li>
               </Link> 
               <Link to="/Game">
               <li>
                   Game
               </li>
               </Link> 
               <Link to="/Result">
               <li>
                   Score
               </li>
               </Link> 
               
           </ul>
           </nav> 
    </div>
  )
}
