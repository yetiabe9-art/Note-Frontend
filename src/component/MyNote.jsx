import React, { useEffect, useState } from 'react';
import note6 from '../assets/note6.jpg'

function MyNote({ notes, setNotes }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch("https://note-backend-wdzp.onrender.com/note", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(data => setNotes(data.notes))
    .catch(err => setError("Failed to load notes"));
  }, [setNotes]);

  function handleEdit(note, index) {
    setEditIndex(index);
    setEditTitle(note.title);
    setEditContent(note.content);
  }

  function handleUpdate() {
    if (editIndex === null) return;
    const noteToUpdate = notes[editIndex];
    fetch(`https://note-backend-wdzp.onrender.com/note/${noteToUpdate._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ title: editTitle, content: editContent })
    })
    .then(res => res.json())
    .then(data => {
      setNotes(prev => prev.map((note, i) => 
        i === editIndex ? { ...note, title: editTitle, content: editContent } : note
      ));
      setEditIndex(null);
      setEditTitle('');
      setEditContent('');
    })
    .catch(err => setError("Failed to update note"));
  }

  function handleDelete(noteId) {
    fetch(`https://note-backend-wdzp.onrender.com/note/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(() => {
      setNotes(prev => prev.filter(note => note._id !== noteId));
    })
    .catch(err => setError("Failed to delete note"));
  }
  
  return (
    <div id='main-content'>
      
      <div id='MyNote'>
        <h1 style={{marginLeft:"6rem"}}>My Notes</h1>

      {editIndex !== null && (
        <div style={{ marginBottom: "20px", padding: "10px",marginLeft:"6rem",  }}>
          <input style={{height:"5vh",border:"1px solid  rgb(154, 217, 227) "}}
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            placeholder="Edit title"
          />
          <textarea style={{height:"50vh",border:"1px solid  rgb(154, 217, 227) "}}
            value={editContent}
            onChange={e => setEditContent(e.target.value)}
            placeholder="Edit content"
          />
          <button onClick={handleUpdate}>Update Note</button>
        </div>
      )}

      {notes.map((note, index) => (
        <div key={note._id} id='note'>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => handleEdit(note, index)}>Edit</button>
          <button style={{backgroundColor:"pink",}} onClick={() => handleDelete(note._id)}>Delete</button>
        </div>
      ))}

      {error && <p style={{color:'red'}}>{error}</p>}
       </div>
        </div>

  );
}

export default MyNote;
