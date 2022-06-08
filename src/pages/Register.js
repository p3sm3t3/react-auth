import React from 'react';
import { useState } from 'react';
import { SyntheticEvent } from 'react';
import { Navigate } from 'react-router-dom';
 const  Register = () =>{

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[redirect,setRedirect]=useState(false);
  const submit = async (e:SyntheticEvent) =>{
    e.preventDefault();
    await fetch('https://localhost:44396/api/register',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name,
        email,
        password
      })
    });
    
    setRedirect(true);
  }
    if(redirect){
      return <Navigate  to='/login'/>
    }
    
    return(
      <div>
           <form onSubmit={submit}>
            
            <h1>Register</h1>
            <div className="form-floating">
              <input type="text" className="form-control" id="floatingInput" placeholder="Nume Prenume"
                required onChange={e => setName(e.target.value)}
              />
              <label for="floatingInput">Nume Prenume</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                required onChange={e => setEmail(e.target.value)}
                />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                required onChange={e => setPassword(e.target.value)}
              />
              <label for="floatingInput">Password</label>
            </div>

            
            <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
      </div>
       
          
        
    );

 };
 export default Register;