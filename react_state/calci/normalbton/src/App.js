import logo from './logo.svg';
import './App.css';
import{useState} from "react"

function App() {

  const [no1,setno1]=useState("");
  const [no2,setno2]=useState("");
  const [sum,setsum]=useState("");
  const [sub,setsub]=useState("");
  const [mul,setmul]=useState("");
  const [div,setdiv]=useState("");
  const[value,setval]=useState("");
  const[submit,setsubmit]=useState("");

const btnhandler = () =>{
  var  ans =parseInt(1) + parseInt(2);
  setsum(ans);
}
const btnhandler2 = () =>{
  var  sub =parseInt(2) - parseInt(3);
  setsub(sub);
}
const btnhandler3 = () =>{
  var  mul =parseInt(1) * parseInt(2);
  setmul(mul);
}
const btnhandler4 = () =>{
  var  div =parseInt(1) / parseInt(2);
  setdiv(div);
}

  return (
    <div className="App"> 
          {/* s1 : <input type="button" onChange={(e) => (setno1(e.target))} value="1"></input>
          s2 : <input type="button" onChange={(e) => (setno2(e.target))} value="2"></input> <br/><br/><br/>    */}
                <button  type="button" onClick={() => setsubmit("1")} >1</button>
                <button  type="button" onClick={(e) => (setsubmit("2"))} >2</button>
                <button  type="button" onClick={(e) => (setsubmit("+"))} >+</button>
                <button  type="button" onClick={btnhandler} >=</button>
          {/* s2 : <input type="button" onClick={(e) => (setsubmit(e.target))} value="2"></input> <br/><br/><br/>  */}
          <h1><input type="text" value={submit}></input></h1>

        {/* <input type="button" value="sum" onClick={btnhandler} ></input>
        <input type="button" value="sub" onClick={btnhandler2} ></input>
        <input type="button" value="mul" onClick={btnhandler3} ></input>
        <input type="button" value="div" onClick={btnhandler4} ></input><br/>
        <input type="text" value={sum}></input>
        <input type="text" value={sub}></input>
        <input type="text" value={mul}></input>
        <input type="text" value={div}></input> */}

    </div>
  );
}

export default App;
