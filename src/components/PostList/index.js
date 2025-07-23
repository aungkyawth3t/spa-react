import React from 'react'
import './index.css';
import SinglePost from '../SinglePost/index.js';

export default function PostList({ posts }) {
  return (
    <div className='postList'>
      {posts.map(post => (
        <SinglePost post={post} />
      ))}
    </div>
  )
}
