import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import note4 from '../assets/note4.jpg'

function AddNote({ notes, setNotes, title, setTitle, content, setContent }) {
  
  const navigate = useNavigate();
  const [error, setError] = useState('');

  function handleSave(event) {
    event.preventDefault();

    if (!title || !content) {
      setError("Title and content cannot be empty");
      return;
    }

    const newNote = { title, content };
    fetch("https://note-backend-wdzp.onrender.com/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(newNote)
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setNotes(prev => [...prev, data.newnote]);
        setTitle('');
        setContent('');
        setError('');
        alert("your note is save")
        navigate("/MyNote");
      }
    })
    .catch(err => setError("Failed to save note"));
  }

  return (
    <div id='AddNote'>
      <img style={{width:"100%",height:"100vh"}} src={note4} alt="" />

      <div id='contentA'>
    <h1 > <strong> Add Note </strong></h1>
      <form onSubmit={handleSave}>
        <label><b> Title </b></label>
        <input  style={{height:"5vh"}}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Note title"
        />
        <label> <strong>Note </strong></label>
        <textarea style={{height:"65vh"}}
          className='styled-textarea'
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Write your note here"
        />
        <button type="submit">Save</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </form>
       </div>
    </div>
  );
}

export default AddNote;
