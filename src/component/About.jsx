import React from 'react'
import lightP from '../assets/lightP.jpg'
import note from '../assets/note.png'
import Photo2 from '../assets/Photo2.jpg'
import Photo4 from '../assets/Photo4.jpg'

function About() {
  return (
    <div id='about'>
        <h1> lets writing journal </h1>
        <p>SmartJournal is a simple and powerful space designed to help you capture your thoughts, stay organized, and express yourself freely. Whether you're writing daily reflections, planning ideas, or storing important notes, SmartJournal keeps everything safe, clear, and always within reach.
Our goal is to make writing effortless—so your ideas can grow, your memories stay alive, and your creativity never stops</p>

      <div id='about-container'>
        <div className='about-img'>
          <img style={{height:"40vh",     width:"30vh"}} src={lightP} />
         <p className='about-para'> <h2>  Stay Organized, Stay Productive </h2>

 SmartJournal is designed to help you keep your thoughts, plans, and ideas neatly organized in one place. Whether you're a student, a professional, or someone who loves writing things down, this platform makes it easier to store important information without losing track of your daily tasks. With a clean and simple interface, you can focus on your ideas without distractions.

         </p>
        </div>
           
           <div className='about-img'>
             
            <p className='about-para'> <h2> Create and Edit Notes Effortlessly</h2>

Our note-taking system allows you to create new notes instantly, edit them anytime, and structure them the way you like. Whether you're brainstorming ideas, planning your schedule, or keeping reminders, Yeti Notebook gives you full control. Everything is built to be fast, flexible, and easy to modify whenever your plans change..
            </p>
             
              <img  style={{height:"40vh",width:"30vh"}} src={Photo4} />
       

           </div>
           <div className='about-img'>
            <img  style={{height:"50vh",width:"30vh"}} src={note} />
            <p className='about-para'> <h2> Keep Your Workspace Clean With Smart Deletion</h2>

Accidentally wrote something you no longer need? You can easily delete notes or move them to the trash for later review. This ensures your workspace stays clean and organized. You can always restore deleted notes if needed, giving you the freedom to manage your content safely and confidently
            </p>
        


           </div>
           <div className='about-img'>
          
            <p className='about-para'> <h2>Track Your Notes Anytime, Anywhere</h2>

 SmartJournal helps you keep track of all your notes from the newest ideas to the ones stored in your archive. Every time you create or update a note, it is saved and accessible whenever you return. This makes it easy to follow your progress, revisit old ideas, and maintain a clear workflow as you grow and improve
            </p>
              <img style={{height:"50vh",width:"30vh"}} src={Photo2} />
      
           </div>

            
           
      </div>
    </div>
  )
}

export default About
