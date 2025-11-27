import React, { useState } from 'react'
import Register from './component/Register'
import MyNote from './component/MyNote'
import AddNote from './component/AddNote'
import Home from './component/Home'
import './App.css' 
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Profile from './component/Profile'
import Layout from './component/Layout'
import About from './component/About'
import Login from './component/Login'

function App() {

  const [notes,setNotes]=useState([]);
  const[content,setContent]=useState("");
  const [title,setTitle]=useState('');
  const[editIndex,setEditIndex]=useState(null);
  const[deleteList,setDeleteList]=useState([]);
  return (
    <div>
    
     <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home/> }/>
       <Route path='/About' element={<About/> }/>
      <Route path='/Register' element={<Register />}/>
      <Route path='/Login'  element={<Login />}/>
       <Route path='/Logout' element={<Home/>}/>
        <Route element={<Layout/>}> 
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/AddNote' element={ <AddNote content={content} setContent=    {setContent} notes={notes} setNotes={setNotes} title={title} setTitle= {setTitle} />}/>
      <Route path='/MyNote' element={ <MyNote content={content} setContent={setContent} notes={notes} setNotes={setNotes} />}/>
      </Route> 
      </Routes>
      </BrowserRouter>
    
     
    </div>
  ) 
}

export default App
