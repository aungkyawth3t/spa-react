import React from 'react'
import './index.css';

export default function SinglePost({ post }) {
  console.log(post);
  return (
    <div className="single-post" key={post.id}> {post.title} </div>
  )
}
