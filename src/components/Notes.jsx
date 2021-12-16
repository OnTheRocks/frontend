import React, { useEffect, useState } from 'react'

function Notes() {
  const [notes, setNotes] = useState([{
    title: '',
    content: ''
  }])

  useEffect(() => {
    fetch("/notes").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setNotes(jsonRes));
  })

  return (
    <div className='container'>
      <h1>Notes Page</h1>
      {notes.map(note =>
        <div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>         
        </div>
      )}
    </div>
  )
}

export default Notes
