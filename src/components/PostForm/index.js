import React, { useState } from 'react'
import './index.css';

export default function PostForm() {

  let [title, setTitle] = useState("");
  let resetForm = () => {
    setTitle('');
  }
  return (
    <form className='post-form'>
      <h1>Create Post</h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      </div>
      <p> {title} </p>
      <button type='button' onClick={resetForm}> Reset </button>
      <div className="form-control">
        <button>Post</button>
      </div>
    </form>
  )
}
