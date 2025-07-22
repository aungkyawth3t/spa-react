import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// hook useState
function App() {
  // let name = "Aung Kyaw Thet";
  let [name, setName] = useState("Aung Kyaw Thet") // [getter, setter]
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
  console.log(posts);

  let changeName = () => {
    setName('Aung Aung');
    console.log(name);
  }

  let deletePost = (id) => {
    setPosts((prevState) => prevState.filter(post => post.id !== id))
  }

  return (
    <div className='app'>
      <h1>Hello {name} </h1>
      <button onClick={changeName}>Change Name</button>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
