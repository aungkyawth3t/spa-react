import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// hook useState
function App() {
  // let name = "Aung Kyaw Thet";
  let [name, setName] = useState("Aung Kyaw Thet") // [getter, setter]

  let changeName = () => {
    setName('Aung Aung');
    console.log(name);
  }

  return (
    <div className='app'>
      <h1>Hello {name} </h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
