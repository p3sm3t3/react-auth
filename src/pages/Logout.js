import React,{useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';

 const  Logout = () =>{
  
   const[redirect,setRedirect]=useState(false);
    useEffect(()=>{
     (
       async () =>{
      const response= await fetch('https://localhost:44396/api/logout',{
        method:      'GET',
        credentials: "include",
        headers:{'Content-Type':'application/json',
      },
        
        });
        const content = await response.json();
      
        setRedirect(true);
       }
     )();

    });
    if(redirect){
    
    }
   
    return(
      <div>
       
      </div>
       
          
        
    );

 };
 export default Logout;