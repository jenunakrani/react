import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [name,setName] = useState("cdmi");

  const btnhandler =() =>{
    setName("hii");
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{name}</h3>
      <h3>{name}</h3>
      <h3>{name}</h3>
      <h3>{name}</h3>
      <h3>{name}</h3>
      <input type="button" value="click" onClick={btnhandler}></input>
    </>
   
  );
}

export default App;
