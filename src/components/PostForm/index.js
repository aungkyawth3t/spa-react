import React, { useRef, useState } from 'react'
import './index.css';

export default function PostForm({ addPost }) {

  // let [title, setTitle] = useState("");
  let title = useRef();
  let resetForm = () => {
    // setTitle('');
    title.current.value = '';
  }

  let uploadPost = (e) => {
    e.preventDefault();
    let post = {
      id: Math.floor(Math.random() * 10000),
      title: title.current.value
    }
    addPost(post);
    resetForm();
  }
  return (
    <form className='post-form' onSubmit={uploadPost}>
      <h1>Create Post</h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input type="text" ref={title} />
      </div>
      <div className="form-control">
        <button>Post</button>
      </div>
    </form>
  )
}
