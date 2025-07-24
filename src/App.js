import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostList from './components/PostList';
import Modal from './components/Modal/index';
import PostForm from './components/PostForm/index';
// hook useState
function App() {
  let [showModal, setShowModal] = useState(false);
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
      <Navbar setShowModal={setShowModal} />
      <PostList posts={posts} />
      {/* <Modal>
        <h1>Zoom class is avaliable now.</h1>
        <p> feel free to <a href="">join here </a></p>
      </Modal> */}

      {showModal && <Modal setShowModal={setShowModal}>
        <PostForm />
      </Modal >}
    </>
  );
}

export default App;
