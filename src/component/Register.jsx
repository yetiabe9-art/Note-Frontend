import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../component/Login'
import { useState } from 'react'
import note3 from '../assets/note3.jpg'

function Register() {
   const[fullName,setFullName]= useState('');
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');
    const[password2,setPassword2]=useState('');
  const [ message ,setMessage]= useState('');
  const navigate= useNavigate("");
  const  handleSubmit = async(event)=>{
     event.preventDefault();
       if (!fullName.trim() || !email.trim() || !password.trim() || !password2.trim()) {
    setMessage("All fields are required");
    return;
  }
      if(password === password2 && password.length>0){
      setMessage("sign up successfully ")
        console.log({
        fullName,
        email,
        password,
      });
    }else{
      setMessage("the password is not match")

    }
    console.log(fullName,email,password,"tessssssssssssss")
        fetch("https://note-backend-wdzp.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          let message = res.json();
          message.then((err) => setMessage(err.message));
        }
        return res.json();
      })
      .then((data) => {
        alert(data.message);
      });
     navigate("/login");


  }
  
  return (
    <div style={{backgroundColor:"white"}
    } id='form'  >
      <img style={{width:"100%",height:"100vh",}} src={note3} alt="" />
      <div id='content'>
      <form className='registor'  onSubmit={handleSubmit}>
        <label > Full Name</label>
        <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} />
        <label >Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label >Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <label >Password Confirm</label>
        <input type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
        
             <button type='submit'>Sign Up</button>
             {message && <p>{message}</p>}
              <p>Already have an account ?</p>

              <button type='button'> <Link to='/Login'>Login</Link> </button>
                   </form>
                    </div>
    </div>
  )
}

export default Register
