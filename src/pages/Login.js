import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SyntheticEvent } from 'react';


  const  Login = () =>{
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[OtpCode,setOtpCode] = useState('');
  const[InfoMessage,setInfoMessage] = useState('');
  const[redirect,setRedirect]=useState(false);

        const submit = async (e:SyntheticEvent) =>{
          e.preventDefault();
          
          const response= await fetch('https://localhost:44396/api/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials: 'include',
            body:JSON.stringify({
              email,
              password,
              OtpCode
            })
          });
          const content = await response.json();
          
          if(content.message == "ok"){
            setRedirect(true);
          }else{
            setInfoMessage(content.message);
            setRedirect(false);
           
          }
        
        }

        if(redirect){
          return <Navigate  to='/'/>
        }
    return(

       <div>
            <form onSubmit={submit}> 
            <div>
            {InfoMessage }
          </div>
            <h1>Login</h1>
            
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
               required onChange={e => setEmail(e.target.value)}
              />
               <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
               required onChange={e => setPassword(e.target.value)}
              />
              <label for="floatingInput">Password</label>
            </div>
            <div className="form-floating">
              <input type="number" className="form-control" id="floatingInputOtp" placeholder="OtpCode"
               required onChange={e => setOtpCode(e.target.value)}
              />
               <label for="floatingInput">Otp</label>
            </div>
            
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>

       </div>
          
       
        
    );

 };
 export default Login;