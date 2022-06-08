import React,{useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';

 const  Home = () =>{
   const [name,setName]=useState('');
   const[redirect,setRedirect]=useState(false);
    useEffect(()=>{
     (
       async () =>{
      const response= await fetch('https://localhost:44396/api/user',{
        method:      'GET',
        credentials: "include",
        headers:{'Content-Type':'application/json',
        
      },
        
        });
        const content = await response.json();
        setName(content.name);
        setRedirect(true);
       }
     )();

    });
    if(redirect){
    
    }
   
    return(
      <div>
        {name ? 'Salut ' +  name : 'Fara autentificare'}
      </div>
       
          
        
    );

 };
 export default Home;