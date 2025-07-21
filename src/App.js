import logo from './logo.svg';
import './App.css';
import Image from "./assets/image.jpg";

function App() {
  let name = "Aung Kyaw Thet";
  return (
    <div>
      <h1>Hello {name} </h1>
      {/* <img src="/image.jpg" alt="" /> */}
      <img src={Image} alt="" />
    </div>
  );
}

export default App;
