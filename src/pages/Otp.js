import React,{useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { SyntheticEvent } from 'react';


  const  Otp = () =>{
  const[userId,setUserId] = useState('');
  const[password,setPassword] = useState('');
  const[OtpCodeDate,setOtpDate] = useState('');
  const[redirect,setRedirect]=useState(false);
  const[ListUser,setListUser]=useState([]);
  const [OtpCode,setOtpCode]=useState('');
  
  useEffect(()=>{
    (
      async () =>{
     const response= await fetch('https://localhost:44396/api/listuser',{
       method:'GET',
       credentials: "include",
       headers:{'Content-Type':'application/json'
       
     },
       
       })
       const content = await response.json();
       setRedirect(true);
       //useEffect(() => { setListUser(content) }, []);
       setListUser (content);
       
      
      }
    )();
    

   },[])

        const submit = async (e:SyntheticEvent) =>{
          e.preventDefault();
        
          const response= await fetch('https://localhost:44396/api/otp',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials: 'include',
            body:JSON.stringify({
              userId,
              OtpCodeDate
              
              
            })
          }
          
          );
          const content = await response.json();
          
          setOtpCode(content.otpGenerate);
          setRedirect(true);
        }

        if(redirect){
         // return <Navigate  to='/'/>
        }
    return(

      
       <div>
            <form onSubmit={submit}> 
            
            <h1>Generare Opt</h1>
            
            <div class="form-group">
            <label for="sel1">Selecteaza Utilizator:</label>
            <select class="form-control"  required onChange={e => setUserId(e.target.value)} id="sel1">
            <option   value="">Selecteaza</option>

              {ListUser.map((fruit) => <option value={fruit.id}>{fruit.name}</option>)}
            </select>
            </div>
            
            <div className="form-floating">
              <input type="datetime-local" className="form-control" id="floatingInputOtp" placeholder="OtpDate"
               required onChange={e => setOtpDate(e.target.value)}
              />
               <label for="floatingInput">Otp</label>
            </div>
            
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <div>
            <h1>
            {OtpCode ? 'Otp Code :  ' +  OtpCode : ''}
            </h1>
       
          </div>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>


        
       </div>
          
       
        
    );

 };
 export default Otp;