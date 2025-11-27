import React from 'react'
import './Navbar.css'
import About from './About'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <header className='header'>
        <a href="/" className='logo'>SmartJournal</a>
         <nav className='navbar'> 
        <a href="/">Home</a>
        <Link to="/About">About</Link>
        <Link to="/Register">Register</Link>
         
        </nav>
      </header>

        
      
    </div>
  )
}

export default Navbar
