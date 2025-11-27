
import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import AddNote from './AddNote'
import note2 from '../assets/note2.jpg'

function Login() {
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage]=useState('');
    const navigate = useNavigate();

    function handleLogin(event){
    event.preventDefault();
    setMessage('');
      if (!email.trim() || !password.trim()) {
    setMessage("Please enter email and password");
    return; 
  }

    fetch("https://note-backend-wdzp.onrender.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) =>
        res.json().then((data) => {
          if (!res.ok) {
            setMessage(data.error||"login failed");
          } else {
            localStorage.setItem("token", data.token)
            setMessage("Successfully logged in!");
             navigate("/AddNote");
          }
        })
      )
      .catch((err) => {
        console.error(err);
        setMessage(" server error");
      });
  };
    

  return (
    <div id='loginform'>
       <img style={{width:"100%",height:"100vh",}} src={note2} alt="" />
       <div id='content'>
       <form className=' registor' action="" onSubmit={handleLogin} >
       
             <label >Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
        <label >Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
             <button id='signin-btn' type='submit' >sign In</button>
             {message && <p>{message}</p>}
      </form>
       </div>
      
    </div>
  )
}

export default Login
