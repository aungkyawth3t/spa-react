import React from 'react'
import './index.css';

export default function SinglePost({ post, styles }) {
  console.log(post);
  return (
    <div className={`single-post ${styles.card}`} key={post.id}>
      <h3>{post.title}</h3>
      <h4> status - {post.status} </h4>
    </div>
  )
}
