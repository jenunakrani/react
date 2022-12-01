import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{useState} from "react"
function App() {

  const [val,setVal] = useState("");

  const backspace=()=>{
    try{
      setVal(val.slice(0,-1));
    }catch(error){
      setVal("");
    }
 
  }
  const ans= () =>{
    try{
      setVal(eval(val))
    }catch(error){
      setVal("error");
    }
  }

  return (
    <div className="container mt-5 bg-secondary border border-4  shadow p-3" style={{width:280}}>
    <input type="text" name="" value={val}></input><br></br>
    
  <input 	type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1"  onClick={(e) => setVal(val + e.target.value)} value="."></input>
  <input 	type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1"onClick={(e) => setVal(val + e.target.value)}  value="%"></input>
  <input 	type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => backspace()} value="c/"></input><br></br>

  <input 	type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => setVal(val + e.target.value)} value="7"></input>
  <input  type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => setVal(val + e.target.value)} value="8"></input>
  <input  type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => setVal(val + e.target.value)} value="9"></input>
  <input 	type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => setVal(val + e.target.value)} value="/"></input>


  <input  type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => setVal(val + e.target.value)} value="4"></input>
  <input  type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => setVal(val + e.target.value)} value="5"></input>
  <input  type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1"  onClick={(e) => setVal(val + e.target.value)} value="6"></input>
  <input  type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e)=> setVal(val + e.target.value)} value="*"></input>


  <input  type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => setVal(val + e.target.value)} value="1" ></input>
  <input  type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => setVal(val + e.target.value)} value="2" ></input>
  <input  type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => setVal(val + e.target.value)} value="3"></input>
  <input  type="button" className="btn btn-lg  bg-dark text-light fs-4 m-1" onClick={(e) => setVal(val + e.target.value)} value="-" ></input>


  <input  type="button" className="btn btn-lg  bg-dark text-light fs-5 m-1" value="C" ></input>
  <input  type="button" className="btn btn-lg  bg-dark text-light fs-5 m-1" onClick={(e) => setVal(val + e.target.value)} value="0" ></input>
  <input  type="button" className="btn btn-lg  bg-dark text-light fs-5 m-1" onClick={() => ans()} value="="></input>

  <input  type="button" className="btn btn-lg  bg-dark text-light fs-5 m-1" onClick={(e) => setVal(val + e.target.value)} value="+"></input>

</div>
  );
}

export default App;
