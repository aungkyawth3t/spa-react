import React from 'react'
import './index.css';
import SinglePost from '../SinglePost/index.js';
import styles from './single_post.module.css';

export default function PostList({ posts }) {
  return (
    <div className='postList container'>
      {posts.map(post => (
        <SinglePost post={post} styles={styles} />
      ))}
    </div>
  )
}
