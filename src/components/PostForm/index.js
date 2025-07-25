import React, { useState } from 'react'
import './index.css';

export default function PostForm({ addPost }) {

  let [title, setTitle] = useState("");
  let [status, setStatus] = useState("upcoming");
  let resetForm = () => {
    setTitle('');
  }

  let uploadPost = (e) => {
    e.preventDefault();
    let post = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      status: status
    }
    addPost(post);
    resetForm();
  }
  return (
    <form className='post-form' onSubmit={uploadPost}>
      <h1>Create Post </h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      </div>
      <div className="form-control">
        <label htmlFor="">Status</label>
        <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="dropped">Dropped</option>
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>
      <div className="form-control">
        <button>Post</button>
      </div>
    </form>
  )
}
