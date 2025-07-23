import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostList from './components/PostList';
import Modal from './components/Modal/index';
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

      {showModal && <Modal danger={false}>
        <h1>Terms and Conditions</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum officiis saepe tempora dolorem, iure eum similique voluptate reprehenderit sed culpa odio quis vitae ab illum, magni cumque provident temporibus vel.</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>}
    </>
  );
}

export default App;
