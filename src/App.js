import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostList from './components/PostList';
// hook useState
function App() {
  // let name = "Aung Kyaw Thet";
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First post',
    },
    {
      id: 2,
      title: 'Second post',
    },
    {
      id: 3,
      title: 'Third post',
    }
  ]);
  return (
    <>
      <Navbar />
      <PostList posts={posts} />
    </>
  );
}

export default App;
