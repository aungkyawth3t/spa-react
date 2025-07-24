import React from 'react'
import './index.css';

export default function SinglePost({ post, styles }) {
  console.log(post);
  return (
    <div className={`single-post ${styles.card}`} key={post.id}> {post.title} </div>
  )
}
