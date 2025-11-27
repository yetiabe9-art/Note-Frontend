import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar' 
import Photo6 from '../assets/Photo6.jpg'

import About from './About'

function Home() {
  return (
    
    <div>
        <Navbar/>  
       
         
          <img style={{width:"100%", height:"90vh"}} src={Photo6} alt="" />
         <section>
             <div id='contenth'>
           <div id='paragraphy'>
               <h1> Note & Journal Writing </h1>
               <p>

Capture your thoughts quickly and keep them organized. <br /> This app lets you create, edit, and delete notes easily and helping you stay productive and focused every day.</p>
               <button >  <Link to='/Register'>Get Start</Link> </button>
                </div>
        
      </div>

        </section>
      <section id='/about'>
       <About/>

      </section>
     
      <section>
       <footer style={{ background:" rgb(178, 198, 201)", color: "black", textAlign: "center", padding: "20px" }}>
        <p>© 2025 My Notes App. All rights reserved.</p>
        <p>
          <Link to="/About" style={{ color: "white", textDecoration: "underline" }}>
            Learn More
          </Link>
        </p>
      </footer>
      </section>
      

    
      
    </div>

  )
}

export default Home
