import React, { useState } from 'react'

function CreateNote() {
  const [input, setInput] = useState({
    title: '',
    content: ''
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
    // console.log(event.target);
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(input);
  }

  return (
    <div className='container'>
      <h1>Create Note</h1>
      <form>
        <div className='form-group'>
          <input onChange={handleChange} name='title' value={input.title} autoComplete='off' className='form-control' placeholder='Title'></input>
        </div>
        <div className='form-group'>
          <textarea onChange={handleChange} name='content' value={input.content} autoComplete='off' className='form-control' placeholder='Content'></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-outline-success">Add Note</button>
      </form>
    </div>
  )
}

export default CreateNote
